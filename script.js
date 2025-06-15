    // script.js

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        
        // Add interactive hover effects to skill tags
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1.05)';
                }, 100);
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });

        // Smooth scroll animation for sections
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Add typing effect to name
        const nameElement = document.querySelector('.name');
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);

        // Add dynamic floating elements
        function createFloatingElement() {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.left = Math.random() * 100 + '%';
            element.style.animationDelay = Math.random() * 5 + 's';
            element.style.animationDuration = (10 + Math.random() * 10) + 's';
            document.querySelector('.floating-elements').appendChild(element);

            // Remove element after animation
            setTimeout(() => {
                element.remove();
            }, 25000);
        }

        // Create new floating elements periodically
        setInterval(createFloatingElement, 3000);
    });

    // PDF Download functionality using jsPDF
    function downloadCV() {
        // Check if jsPDF is available
        if (typeof window.jsPDF === 'undefined') {
            // Fallback: create a print-friendly version
            printCV();
            return;
        }

        const { jsPDF } = window.jsPDF;
        const doc = new jsPDF();

        // Set font
        doc.setFont('helvetica');

        // Header
        doc.setFontSize(24);
        doc.setTextColor(44, 62, 80);
        doc.text('Hamza Hatem', 20, 30);
        
        doc.setFontSize(14);
        doc.setTextColor(102, 126, 234);
        doc.text('Computer Science Student | Aspiring Software Developer', 20, 40);

        // Contact Info
        doc.setFontSize(10);
        doc.setTextColor(85, 85, 85);
        doc.text('Email: hamzaseoudi01@gmail.com', 20, 55);
        doc.text('Phone: +20 102 622 1223', 20, 62);
        doc.text('GitHub: github.com/HamzaHatem10', 20, 69);
        doc.text('LinkedIn: linkedin.com/in/hamza-seoudi', 20, 76);

        // About Section
        doc.setFontSize(16);
        doc.setTextColor(44, 62, 80);
        doc.text('About Me', 20, 95);
        
        doc.setFontSize(10);
        doc.setTextColor(85, 85, 85);
        const aboutText = [
            'Passionate Computer Science student with a strong foundation in software',
            'development and problem-solving. Eager to apply theoretical knowledge in a',
            'practical internship environment while contributing to innovative projects.',
            '',
            'Experienced in multiple programming languages and frameworks, with a particular',
            'interest in web development, machine learning, and mobile app development.',
            'Strong collaborative skills and enthusiasm for learning new technologies.'
        ];
        
        let yPos = 105;
        aboutText.forEach(line => {
            doc.text(line, 20, yPos);
            yPos += 7;
        });

        // Education Section
        yPos += 10;
        doc.setFontSize(16);
        doc.setTextColor(44, 62, 80);
        doc.text('Education', 20, yPos);
        
        yPos += 10;
        doc.setFontSize(12);
        doc.text('Bachelor of Science in Computer Science', 20, yPos);
        
        yPos += 7;
        doc.setFontSize(10);
        doc.setTextColor(102, 126, 234);
        doc.text('University of Technology', 20, yPos);
        
        yPos += 7;
        doc.setTextColor(136, 136, 136);
        doc.text('September 2022 - May 2026 (Expected)', 20, yPos);
        
        yPos += 7;
        doc.setTextColor(85, 85, 85);
        doc.text('Current GPA: 3.7/4.0', 20, yPos);

        // Technical Skills
        yPos += 15;
        doc.setFontSize(16);
        doc.setTextColor(44, 62, 80);
        doc.text('Technical Skills', 20, yPos);
        
        yPos += 10;
        doc.setFontSize(11);
        doc.text('Programming Languages:', 20, yPos);
        yPos += 7;
        doc.setFontSize(10);
        doc.text('Python, Java, JavaScript, C++, HTML/CSS, SQL', 25, yPos);
        
        yPos += 10;
        doc.setFontSize(11);
        doc.text('Frameworks & Technologies:', 20, yPos);
        yPos += 7;
        doc.setFontSize(10);
        doc.text('React, Node.js, Flask, MongoDB, Git, Docker', 25, yPos);
        
        yPos += 10;
        doc.setFontSize(11);
        doc.text('Tools & Software:', 20, yPos);
        yPos += 7;
        doc.setFontSize(10);
        doc.text('VS Code, IntelliJ, Figma, Linux, AWS', 25, yPos);

        // Projects (if there's space)
        if (yPos < 230) {
            yPos += 15;
            doc.setFontSize(16);
            doc.setTextColor(44, 62, 80);
            doc.text('Key Projects', 20, yPos);
            
            yPos += 10;
            doc.setFontSize(12);
            doc.text('E-Commerce Web Application', 20, yPos);
            yPos += 7;
            doc.setFontSize(10);
            doc.setTextColor(85, 85, 85);
            doc.text('Full-stack platform using React, Node.js, and MongoDB', 20, yPos);
            
            yPos += 10;
            doc.setFontSize(12);
            doc.setTextColor(44, 62, 80);
            doc.text('Machine Learning Weather Predictor', 20, yPos);
            yPos += 7;
            doc.setFontSize(10);
            doc.setTextColor(85, 85, 85);
            doc.text('Weather prediction model with 85% accuracy using Python', 20, yPos);
        }

        // Save the PDF
        doc.save('Hamza_Hatem_CV.pdf');
    }

    // Fallback print function if jsPDF is not available
    function printCV() {
        // Hide floating elements and download button for printing
        const floatingElements = document.querySelector('.floating-elements');
        const downloadBtn = document.querySelector('.download-btn');
        
        floatingElements.style.display = 'none';
        downloadBtn.style.display = 'none';
        
        // Open print dialog
        window.print();
        
        // Restore elements after printing
        setTimeout(() => {
            floatingElements.style.display = 'block';
            downloadBtn.style.display = 'block';
        }, 1000);
    }
