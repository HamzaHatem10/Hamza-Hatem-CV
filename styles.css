* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.cv-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.header {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    padding: 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.header::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 30px 30px;
    animation: float 20s linear infinite;
}

@keyframes float {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}

.profile-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 48px;
    color: white;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
}

.profile-img:hover {
    transform: scale(1.1) rotate(5deg);
}

.name {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
}

.title {
    font-size: 1.2rem;
    opacity: 0.9;
    position: relative;
    z-index: 1;
}

.contact-info {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    min-height: 44px;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: white;
    cursor: pointer;
}

.contact-item:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.contact-item:active {
    transform: translateY(0);
}

.main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 40px;
}

.section {
    margin-bottom: 30px;
}

.section-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
}

.section-title::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, #667eea, transparent);
}

.about-text {
    color: #555;
    margin-bottom: 15px;
    font-size: 1rem;
}

.skill-category {
    margin-bottom: 25px;
}

.skill-category h4 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 1rem;
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.skill-tag {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 10px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.skill-tag:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.education-item, .project-item {
    background: #f8f9ff;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 15px;
    border-left: 4px solid #667eea;
    transition: all 0.3s ease;
}

.education-item:hover, .project-item:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.item-title {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 5px;
    font-size: 1.1rem;
}

.item-subtitle {
    color: #667eea;
    font-weight: 500;
    margin-bottom: 5px;
    font-size: 1rem;
}

.item-date {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 10px;
}

.item-description {
    color: #555;
    font-size: 0.95rem;
}

.project-links {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

.project-link {
    background: #667eea;
    color: white;
    padding: 8px 16px;
    border-radius: 15px;
    text-decoration: none;
    font-size: 0.85rem;
    transition: all 0.3s ease;
    min-height: 44px;
    display: flex;
    align-items: center;
}

.project-link:hover {
    background: #5a67d8;
    transform: translateY(-1px);
}

.language-proficiency {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    font-size: 0.95rem;
}

.proficiency-bar {
    width: 100px;
    height: 8px;
    background: #e1e5e9;
    border-radius: 4px;
    overflow: hidden;
}

.proficiency-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 4px;
    transition: width 0.8s ease;
}

.interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
}

.interest-item {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    padding: 18px 15px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s ease;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.interest-item:hover {
    transform: translateY(-3px);
}

.interest-icon {
    font-size: 1.8rem;
    margin-bottom: 8px;
}

.interest-name {
    font-size: 0.95rem;
    color: #2c3e50;
    font-weight: 500;
}

.floating-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.floating-element {
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float-random 15s linear infinite;
}

@keyframes float-random {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-60px) rotate(360deg); opacity: 0; }
}

.download-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 18px 24px;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
    min-height: 56px;
    font-size: 1rem;
}

.download-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

@media (max-width: 1024px) {
    .main-content {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 30px;
    }
    
    .contact-info {
        gap: 20px;
    }
    
    .skills-grid {
        gap: 10px;
    }
    
    .skill-tag {
        padding: 8px 14px;
        font-size: 0.85rem;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 15px;
    }
    
    .main-content {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 20px;
    }

    .contact-info {
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    
    .contact-item {
        justify-content: center;
        padding: 8px 12px;
        min-width: 200px;
    }

    .name {
        font-size: 2rem;
        line-height: 1.2;
    }
    
    .title {
        font-size: 1.1rem;
        line-height: 1.3;
    }

    .header {
        padding: 25px 15px;
    }
    
    .profile-img {
        width: 100px;
        height: 100px;
        font-size: 40px;
    }
    
    .section-title {
        font-size: 1.3rem;
    }
    
    .about-text {
        font-size: 0.95rem;
    }
    
    .skill-category h4 {
        font-size: 0.95rem;
    }
    
    .skills-grid {
        gap: 8px;
    }
    
    .skill-tag {
        padding: 8px 12px;
        font-size: 0.8rem;
        min-height: 40px;
    }
    
    .interests-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
    }
    
    .interest-item {
        padding: 12px 8px;
        min-height: 70px;
    }
    
    .interest-icon {
        font-size: 1.5rem;
        margin-bottom: 5px;
    }
    
    .interest-name {
        font-size: 0.85rem;
    }
    
    .download-btn {
        bottom: 20px;
        right: 20px;
        padding: 14px 18px;
        font-size: 0.9rem;
        min-height: 48px;
    }
    
    .language-proficiency {
        font-size: 0.9rem;
        margin-bottom: 10px;
    }
    
    .proficiency-bar {
        width: 80px;
    }
    
    .item-title {
        font-size: 1rem;
    }
    
    .item-subtitle {
        font-size: 0.9rem;
    }
    
    .item-description {
        font-size: 0.9rem;
        line-height: 1.5;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 10px;
    }
    
    .name {
        font-size: 1.8rem;
    }
    
    .title {
        font-size: 1rem;
    }
    
    .header {
        padding: 20px 10px;
    }
    
    .main-content {
        padding: 15px;
        gap: 15px;
    }
    
    .contact-item {
        font-size: 0.9rem;
        min-width: 180px;
    }
    
    .section-title {
        font-size: 1.2rem;
    }
    
    .skill-tag {
        font-size: 0.75rem;
        padding: 6px 10px;
    }
    
    .interests-grid {
        grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
    }
    
    .download-btn {
        bottom: 15px;
        right: 15px;
        padding: 12px 16px;
        font-size: 0.85rem;
    }
    
    .floating-element {
        width: 40px;
        height: 40px;
    }
}
