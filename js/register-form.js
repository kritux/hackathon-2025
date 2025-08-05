// Register Form Component
class RegisterForm {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.init();
    }

    init() {
        if (!this.container) {
            console.error('Register form container not found');
            return;
        }
        console.log('Register form container found, rendering...');
        this.render();
        this.attachEventListeners();
    }

    render() {
        const formHTML = `
            <div class="flex items-center justify-center py-12">
                <div class="mx-auto w-full max-w-lg bg-header-dark p-8 rounded-lg shadow-lg">
                    <p class="mt-3 text-center text-gray-300 mb-8">Join our hackathon and showcase your skills!</p>

                    <form id="register-form" action="https://api.web3forms.com/submit" class="space-y-12">
                        <!-- This is a working contact form. 
                             Get your free access key from: https://web3forms.com/  -->

                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
                        
                        <div class="grid gap-12 sm:grid-cols-2">
                            <div class="relative z-0">
                                <input type="text" name="firstName" class="peer block w-full appearance-none border-0 border-b-4 border-custom-blue bg-transparent py-4 px-0 text-sm text-white focus:border-custom-blue focus:outline-none focus:ring-0" style="border-bottom: 4px solid #09c1e8 !important;" placeholder=" " />
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-custom-blue">First name</label>
                            </div>
                            <div class="relative z-0">
                                <input type="text" name="lastName" class="peer block w-full appearance-none border-0 border-b-4 border-custom-blue bg-transparent py-4 px-0 text-sm text-white focus:border-custom-blue focus:outline-none focus:ring-0" style="border-bottom: 4px solid #09c1e8 !important;" placeholder=" " />
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-custom-blue">Last name</label>
                            </div>
                        </div>
                        
                        <br><br><br><br>
                        
                        <div class="grid gap-12 sm:grid-cols-2">
                            <div class="relative z-0">
                                <input type="tel" name="phone" class="peer block w-full appearance-none border-0 border-b-4 border-custom-blue bg-transparent py-4 px-0 text-sm text-white focus:border-custom-blue focus:outline-none focus:ring-0" style="border-bottom: 4px solid #09c1e8 !important;" placeholder=" " />
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-custom-blue">Phone number</label>
                            </div>
                            <div class="relative z-0">
                                <input type="email" name="email" class="peer block w-full appearance-none border-0 border-b-4 border-custom-blue bg-transparent py-4 px-0 text-sm text-white focus:border-custom-blue focus:outline-none focus:ring-0" style="border-bottom: 4px solid #09c1e8 !important;" placeholder=" " />
                                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-custom-blue">Email</label>
                            </div>
                        </div>
                        
                        <br><br><br><br><br><br><br><br><br><br>
                        <div>
                            <button type="submit" class="w-full rounded-md bg-custom-blue px-10 py-4 text-black font-medium hover:bg-custom-blue-dark transition-colors duration-200">Register Now</button>
                        </div>
                    </form>
                    
                    <!-- Success/Error Messages -->
                    <div id="form-message" class="hidden mt-6 p-4 rounded-lg"></div>
                </div>
            </div>
        `;
        
        this.container.innerHTML = formHTML;
        console.log('Register form rendered successfully');
    }

    attachEventListeners() {
        const form = document.getElementById('register-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!this.validateForm(data)) {
            return;
        }

        // Show success message
        this.showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Here you would typically send the data to your backend
        console.log('Form data:', data);
        
        // Reset form
        e.target.reset();
    }

    validateForm(data) {
        const requiredFields = ['firstName', 'lastName', 'phone', 'email'];
        
        for (const field of requiredFields) {
            if (!data[field] || data[field].trim() === '') {
                this.showMessage(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`, 'error');
                return false;
            }
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return false;
        }

        return true;
    }

    showMessage(message, type) {
        const messageDiv = document.getElementById('form-message');
        if (messageDiv) {
            messageDiv.className = `mt-6 p-4 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`;
            messageDiv.textContent = message;
            messageDiv.classList.remove('hidden');
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageDiv.classList.add('hidden');
            }, 5000);
        }
    }
}

// Initialize register form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing register form...');
    
    // Initialize register form if container exists
    const registerContainer = document.getElementById('register-form-container');
    if (registerContainer) {
        window.registerForm = new RegisterForm('register-form-container');
    } else {
        console.error('Register form container not found in DOM');
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RegisterForm;
} 