// Timeline Component
class Timeline {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
        console.log('Timeline constructor called with:', containerId, data);
        this.init();
    }

    init() {
        if (!this.container) {
            console.error('Timeline container not found');
            return;
        }
        console.log('Timeline container found, rendering...');
        this.render();
    }

    render() {
        console.log('Rendering timeline with', this.data.length, 'items');
        const timelineHTML = `
            <div class="mt-8 max-w-6xl mx-auto px-4">
                <ul class="timeline timeline-vertical">
                    ${this.data.map((item, index) => this.renderTimelineItem(item, index)).join('')}
                </ul>
            </div>
        `;
        
        this.container.innerHTML = timelineHTML;
        console.log('Timeline rendered successfully');
    }

    renderTimelineItem(item, index) {
        const isEven = index % 2 === 0;
        const isLast = index === this.data.length - 1;
        
        if (isEven) {
            return `
                <li>
                    <div class="timeline-start timeline-box">
                        <div class="font-bold text-custom-blue">${item.title}</div>
                        <div class="text-sm text-white">${item.time}</div>
                        ${item.description ? `<div class="text-xs text-gray-300 mt-1">${item.description}</div>` : ''}
                    </div>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    ${isLast ? '' : '<hr />'}
                </li>
            `;
        } else {
            return `
                <li>
                    ${isLast ? '' : '<hr />'}
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="timeline-end timeline-box">
                        <div class="font-bold text-custom-blue">${item.title}</div>
                        <div class="text-sm text-white">${item.time}</div>
                        ${item.description ? `<div class="text-xs text-gray-300 mt-1">${item.description}</div>` : ''}
                    </div>
                    ${isLast ? '' : '<hr />'}
                </li>
            `;
        }
    }

    // Method to update timeline data
    updateData(newData) {
        this.data = newData;
        this.render();
    }

    // Method to add a new timeline item
    addItem(item) {
        this.data.push(item);
        this.render();
    }

    // Method to remove a timeline item by index
    removeItem(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
            this.render();
        }
    }
}

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing timeline...');
    
    // Timeline data for the hackathon
    const timelineData = [
        {
            time: 'Sunday, September 21st',
            title: 'Day 1 - Hackathon Begins',
            description: 'Opening ceremony and team formation'
        },
        {
            time: 'Monday, September 22nd',
            title: 'Day 2 - Development',
            description: 'Workshops and mentor sessions'
        },
        {
            time: 'Tuesday, September 23rd',
            title: 'Day 3 - Intensive Coding',
            description: 'Core development phase begins'
        },
        {
            time: 'Wednesday, September 24th',
            title: 'Day 4 - Midpoint Check',
            description: 'Progress reviews and feedback'
        },
        {
            time: 'Thursday, September 25th',
            title: 'Day 5 - Refinement',
            description: 'Polish and optimization'
        },
        {
            time: 'Friday, September 26th',
            title: 'Day 6 - Final Touches',
            description: 'Last minute improvements'
        },
        {
            time: 'Saturday, September 27th',
            title: 'Demo Day',
            description: 'Presentations and awards ceremony'
        }
    ];

    // Initialize timeline if container exists
    const timelineContainer = document.getElementById('timeline-container');
    console.log('Timeline container found:', timelineContainer);
    
    if (timelineContainer) {
        window.hackathonTimeline = new Timeline('timeline-container', timelineData);
    } else {
        console.error('Timeline container not found in DOM');
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Timeline;
} 