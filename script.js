let uploadedFile = null;
let analysisData = null;

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        uploadedFile = file;
        const fileName = file.name;
        const fileSize = (file.size / 1024 / 1024).toFixed(2);
        
        // Update UI to show file selected with enhanced styling
        const uploadContent = document.getElementById('uploadContent');
        uploadContent.innerHTML = `
            <div class="text-center">
                <div class="mb-6 transform scale-110">
                    <svg class="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-green-600 mb-3">✅ ${fileName}</h3>
                <p class="text-gray-600 mb-4">${fileSize} MB • Ready to analyze</p>
                
                <div class="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
                    <div class="flex items-center space-x-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span class="text-green-700 font-medium">File uploaded successfully</span>
                    </div>
                </div>
            </div>
        `;
        
        // Update drop zone styling
        const dropZone = document.getElementById('dropZone');
        dropZone.className = 'relative border-3 border-solid border-green-400 rounded-2xl p-12 bg-green-50/50 backdrop-blur-sm';
    }
}

function analyzeResume() {
    if (!uploadedFile) {
        alert('Please upload a resume first!');
        return;
    }

    // Get button elements
    const button = document.getElementById('analyzeBtn');
    const buttonText = button.querySelector('span');
    const loadingAnimation = document.getElementById('loadingAnimation');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    // Show loading state
    buttonText.classList.add('hidden');
    loadingAnimation.classList.remove('hidden');
    button.disabled = true;
    progressContainer.classList.remove('hidden');

    // Simulate AI analysis with progress updates
    const progressSteps = [
        { progress: 20, text: 'Parsing resume content...' },
        { progress: 40, text: 'Analyzing ATS compatibility...' },
        { progress: 60, text: 'Matching with job database...' },
        { progress: 80, text: 'Generating improvement suggestions...' },
        { progress: 100, text: 'Analysis complete!' }
    ];

    let currentStep = 0;
    const progressInterval = setInterval(() => {
        if (currentStep < progressSteps.length) {
            const step = progressSteps[currentStep];
            progressBar.style.width = step.progress + '%';
            progressText.textContent = step.text;
            currentStep++;
        } else {
            clearInterval(progressInterval);
            
            // Generate realistic and trustworthy scores
            const keywordScore = Math.floor(Math.random() * 10) + 78; // 78-87
            const formatScore = Math.floor(Math.random() * 8) + 82;   // 82-89
            const contentScore = Math.floor(Math.random() * 6) + 88;  // 88-93
            const overallScore = Math.floor((keywordScore + formatScore + contentScore) / 3);

            // Update scores
            document.getElementById('atsScore').textContent = overallScore;
            document.getElementById('keywordScore').textContent = keywordScore + '%';
            document.getElementById('formatScore').textContent = formatScore + '%';
            document.getElementById('contentScore').textContent = contentScore + '%';

            // Show results
            document.getElementById('resultsSection').classList.remove('hidden');
            document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });

            // Reset button
            setTimeout(() => {
                loadingAnimation.classList.add('hidden');
                buttonText.classList.remove('hidden');
                buttonText.innerHTML = '<span class="text-xl">✅</span><span class="text-lg">Analysis Complete</span>';
                button.disabled = false;
                progressContainer.classList.add('hidden');
            }, 1000);
        }
    }, 600);
}

function generateImprovedResume() {
    const button = event.target;
    button.innerHTML = '⚡ Generating...';
    button.disabled = true;

    setTimeout(() => {
        document.getElementById('suggestions').innerHTML = `
            <div class="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <svg class="w-5 h-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <h4 class="font-semibold text-green-800">Industry Keywords Added</h4>
                        <p class="text-green-700">Terms like "machine learning", "data analysis", and "Python" have been integrated.</p>
                    </div>
                </div>
            </div>
            
            <div class="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <svg class="w-5 h-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <h4 class="font-semibold text-green-800">Achievements Quantified</h4>
                        <p class="text-green-700">Impact is now demonstrated with specific numbers and percentages.</p>
                    </div>
                </div>
            </div>
            
            <div class="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <svg class="w-5 h-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div class="ml-3">
                        <h4 class="font-semibold text-green-800">Action Verbs Verified</h4>
                        <p class="text-green-700">Usage of strong action verbs like "developed", "implemented", and "optimized" confirmed.</p>
                    </div>
                </div>
            </div>
        `;
        button.innerHTML = '✅ Version Generated';
    }, 1500);
}

function refreshJobMatches() {
    const button = event.target;
    button.innerHTML = '🔄 Refreshing...';

    setTimeout(() => {
        // Simulate new job matches
        const matches = document.getElementById('jobMatches');
        matches.innerHTML = `
            <div class="text-center py-8">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p class="text-gray-600">Finding new job matches...</p>
            </div>
        `;

        setTimeout(() => {
            matches.innerHTML = `
                <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h4 class="text-xl font-semibold text-gray-900">AI Research Scientist</h4>
                            <p class="text-gray-600">DeepMind • London, UK</p>
                        </div>
                        <div class="text-right">
                            <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">95% Match</div>
                            <p class="text-gray-500 text-sm">$140k - $180k</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Deep Learning</span>
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Research</span>
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Publications</span>
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">PhD</span>
                    </div>
                    <p class="text-gray-700 mb-4">Lead groundbreaking AI research and publish in top-tier conferences...</p>
                    <button class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors">
                        View Details
                    </button>
                </div>
            `;
            button.innerHTML = '🔄 Refresh Matches';
        }, 1500);
    }, 500);
}

function generateLearningPlan() {
    const button = event.target;
    button.innerHTML = '📚 Creating Plan...';
    button.disabled = true;

    setTimeout(() => {
        const modal = createModal('📚 Personalized Learning Plan', `
            <div class="space-y-6">
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-gray-900 mb-3">🎯 Your 6-Month Learning Roadmap</h4>
                    <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg border-l-4 border-red-400">
                            <div class="flex items-center justify-between mb-2">
                                <h5 class="font-semibold text-gray-900">Month 1-2: AWS Cloud Computing</h5>
                                <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">High Priority</span>
                            </div>
                            <p class="text-sm text-gray-600 mb-2">Master cloud fundamentals and get AWS certified</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">AWS Solutions Architect</span>
                                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">EC2, S3, Lambda</span>
                            </div>
                        </div>
                        
                        <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                            <div class="flex items-center justify-between mb-2">
                                <h5 class="font-semibold text-gray-900">Month 3: Docker & Kubernetes</h5>
                                <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Medium Priority</span>
                            </div>
                            <p class="text-sm text-gray-600 mb-2">Learn containerization and orchestration</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Docker Fundamentals</span>
                                <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">K8s Basics</span>
                            </div>
                        </div>
                        
                        <div class="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                            <div class="flex items-center justify-between mb-2">
                                <h5 class="font-semibold text-gray-900">Month 4-6: Apache Spark & Big Data</h5>
                                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Growth Skill</span>
                            </div>
                            <p class="text-sm text-gray-600 mb-2">Scale your data processing capabilities</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Spark Core</span>
                                <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">PySpark</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-green-50 p-4 rounded-lg">
                    <h5 class="font-semibold text-green-800 mb-2">💰 Expected Salary Increase</h5>
                    <div class="text-2xl font-bold text-green-600">+$25,000 - $35,000</div>
                    <p class="text-sm text-green-700">Based on market data for these skills</p>
                </div>
            </div>
        `);
        
        button.innerHTML = '📚 Generate Learning Plan';
        button.disabled = false;
    }, 2000);
}

function showJobDetails(jobTitle, company, matchPercentage) {
    const modal = createModal(`💼 ${jobTitle} at ${company}`, `
        <div class="space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="text-xl font-semibold text-gray-900">${jobTitle}</h4>
                    <p class="text-gray-600">${company} • San Francisco, CA</p>
                </div>
                <div class="text-right">
                    <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">${matchPercentage}</div>
                    <p class="text-gray-500 text-sm">$120k - $150k</p>
                </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-semibold text-blue-900 mb-2">🎯 Why You're a Great Match</h5>
                <ul class="text-sm text-blue-800 space-y-1">
                    <li>• Your Python expertise aligns perfectly with their tech stack</li>
                    <li>• Machine learning experience matches 95% of requirements</li>
                    <li>• Previous data science projects demonstrate relevant skills</li>
                    <li>• Educational background fits their team profile</li>
                </ul>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h5 class="font-semibold text-gray-900 mb-2">📋 Key Requirements</h5>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Python</span>
                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Machine Learning</span>
                        <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">SQL</span>
                        <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">TensorFlow</span>
                    </div>
                </div>
                
                <div class="bg-gray-50 p-4 rounded-lg">
                    <h5 class="font-semibold text-gray-900 mb-2">🏢 Company Culture</h5>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Innovation</span>
                        <span class="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">Remote-friendly</span>
                        <span class="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">Growth-focused</span>
                    </div>
                </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
                <h5 class="font-semibold text-yellow-800 mb-2">💡 Application Tips</h5>
                <ul class="text-sm text-yellow-700 space-y-1">
                    <li>• Highlight your TensorFlow project in the cover letter</li>
                    <li>• Mention specific ML algorithms you've implemented</li>
                    <li>• Quantify the impact of your data science work</li>
                    <li>• Apply within 48 hours for best response rates</li>
                </ul>
            </div>
        </div>
    `);
}

// Advanced Features Functions
function showSalaryPredictor() {
    const modal = createModal('💰 AI Salary Predictor', `
        <div class="space-y-4">
            <div class="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 mb-2">Predicted Salary Range</h4>
                <div class="text-3xl font-bold text-green-600">$95,000 - $135,000</div>
                <p class="text-sm text-gray-600 mt-1">Based on your skills, experience, and location</p>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-50 p-3 rounded-lg">
                    <div class="text-sm text-gray-600">25th Percentile</div>
                    <div class="text-lg font-semibold">$85,000</div>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <div class="text-sm text-gray-600">75th Percentile</div>
                    <div class="text-lg font-semibold">$145,000</div>
                </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
                <h5 class="font-semibold text-yellow-800 mb-2">💡 Salary Boost Tips</h5>
                <ul class="text-sm text-yellow-700 space-y-1">
                    <li>• Add AWS certification: +$15,000</li>
                    <li>• Master Kubernetes: +$12,000</li>
                    <li>• Leadership experience: +$20,000</li>
                </ul>
            </div>
        </div>
    `);
}

function showInterviewPrep() {
    const modal = createModal('🎯 AI Interview Prep', `
        <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-900 mb-3">Personalized Questions Based on Your Resume</h4>
                <div class="space-y-3">
                    <div class="bg-white p-3 rounded border-l-4 border-blue-500">
                        <p class="font-medium text-gray-900">"Tell me about your machine learning project experience."</p>
                        <p class="text-sm text-gray-600 mt-1">💡 Highlight your TensorFlow project and quantify results</p>
                    </div>
                    <div class="bg-white p-3 rounded border-l-4 border-green-500">
                        <p class="font-medium text-gray-900">"How do you handle large datasets?"</p>
                        <p class="text-sm text-gray-600 mt-1">💡 Mention your SQL optimization and Spark experience</p>
                    </div>
                    <div class="bg-white p-3 rounded border-l-4 border-purple-500">
                        <p class="font-medium text-gray-900">"Describe a time you solved a complex problem."</p>
                        <p class="text-sm text-gray-600 mt-1">💡 Use the STAR method with your data pipeline project</p>
                    </div>
                </div>
            </div>
            
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                🎥 Start Mock Interview
            </button>
        </div>
    `);
}

function showNetworkAnalysis() {
    const modal = createModal('🌐 Network Analysis', `
        <div class="space-y-4">
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 mb-3">Your Network Strength</h4>
                <div class="flex items-center space-x-4">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-purple-600">127</div>
                        <div class="text-sm text-gray-600">Connections</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-pink-600">23</div>
                        <div class="text-sm text-gray-600">At Target Companies</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-indigo-600">8</div>
                        <div class="text-sm text-gray-600">Potential Referrals</div>
                    </div>
                </div>
            </div>
            
            <div class="space-y-3">
                <h5 class="font-semibold text-gray-900">🎯 Key Connections at Target Companies</h5>
                <div class="space-y-2">
                    <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div>
                            <div class="font-medium">Sarah Chen - Google</div>
                            <div class="text-sm text-gray-600">Senior Data Scientist • 2nd connection</div>
                        </div>
                        <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">Connect</button>
                    </div>
                    <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div>
                            <div class="font-medium">Mike Rodriguez - Microsoft</div>
                            <div class="text-sm text-gray-600">ML Engineer • 1st connection</div>
                        </div>
                        <button class="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">Message</button>
                    </div>
                </div>
            </div>
        </div>
    `);
}

function showCareerPath() {
    const modal = createModal('📈 5-Year Career Roadmap', `
        <div class="space-y-4">
            <div class="relative">
                <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                
                <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                        <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-gray-900">Year 1: Senior Data Scientist</h4>
                            <p class="text-sm text-gray-600">Focus: Leadership skills, advanced ML techniques</p>
                            <div class="text-sm text-green-600 font-medium">Salary: $120k - $140k</div>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-gray-900">Year 2-3: Principal Data Scientist</h4>
                            <p class="text-sm text-gray-600">Focus: Team management, strategic planning</p>
                            <div class="text-sm text-blue-600 font-medium">Salary: $150k - $180k</div>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-gray-900">Year 4-5: Head of Data Science</h4>
                            <p class="text-sm text-gray-600">Focus: Department leadership, business strategy</p>
                            <div class="text-sm text-purple-600 font-medium">Salary: $200k - $250k</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
                <h5 class="font-semibold text-orange-800 mb-2">🚀 Key Milestones</h5>
                <ul class="text-sm text-orange-700 space-y-1">
                    <li>• Publish 3+ research papers</li>
                    <li>• Lead cross-functional teams of 10+</li>
                    <li>• Obtain advanced certifications</li>
                    <li>• Build industry recognition</li>
                </ul>
            </div>
        </div>
    `);
}

function showAIOptimizer() {
    const modal = createModal('🤖 AI Resume Optimizer', `
        <div class="space-y-4">
            <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 mb-3">AI-Powered Optimization</h4>
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-gray-700">Keyword Density Optimization</span>
                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">+15% ATS Score</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-700">Action Verb Enhancement</span>
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">+12% Impact</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-700">Quantification Suggestions</span>
                        <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">+20% Credibility</span>
                    </div>
                </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
                <h5 class="font-semibold text-yellow-800 mb-2">🎯 Optimization Preview</h5>
                <div class="text-sm space-y-2">
                    <div class="bg-white p-2 rounded border-l-4 border-red-400">
                        <span class="text-red-600">Before:</span> "Worked on data analysis projects"
                    </div>
                    <div class="bg-white p-2 rounded border-l-4 border-green-400">
                        <span class="text-green-600">After:</span> "Spearheaded 5+ data analysis projects, improving decision-making efficiency by 35%"
                    </div>
                </div>
            </div>
            
            <button onclick="applyOptimizations(this)" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors">
                🚀 Apply All Optimizations
            </button>
        </div>
    `);
}

function applyOptimizations(button) {
    button.innerHTML = '⚡ Applying Optimizations...';
    button.disabled = true;
    
    setTimeout(() => {
        // Update ATS scores to show improvement
        const currentScore = parseInt(document.getElementById('atsScore').textContent);
        const newScore = Math.min(95, currentScore + 12);
        document.getElementById('atsScore').textContent = newScore;
        
        // Update individual scores
        const keywordScore = Math.min(95, parseInt(document.getElementById('keywordScore').textContent.replace('%', '')) + 15);
        const formatScore = Math.min(98, parseInt(document.getElementById('formatScore').textContent.replace('%', '')) + 8);
        const contentScore = Math.min(98, parseInt(document.getElementById('contentScore').textContent.replace('%', '')) + 5);
        
        document.getElementById('keywordScore').textContent = keywordScore + '%';
        document.getElementById('formatScore').textContent = formatScore + '%';
        document.getElementById('contentScore').textContent = contentScore + '%';
        
        button.innerHTML = '✅ Optimizations Applied!';
        button.className = 'w-full bg-green-600 text-white py-2 px-4 rounded-lg cursor-default';
        
        // Show success message
        setTimeout(() => {
            button.closest('.fixed').remove();
            alert('🎉 Resume optimized successfully! Your ATS score has improved. Check the updated scores above.');
        }, 1500);
    }, 2500);
}

function showCompanyMatcher() {
    const modal = createModal('🎯 Smart Company Matcher', `
        <div class="space-y-4">
            <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
                <h4 class="font-semibold text-gray-900 mb-3">Perfect Company Matches</h4>
                <div class="space-y-3">
                    <div class="bg-white p-3 rounded-lg border border-gray-200">
                        <div class="flex items-center justify-between mb-2">
                            <h5 class="font-semibold text-gray-900">Spotify</h5>
                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">96% Match</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2">Culture fit: Innovation-focused, data-driven, collaborative</p>
                        <div class="flex flex-wrap gap-1">
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Remote-friendly</span>
                            <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">ML-focused</span>
                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Great benefits</span>
                        </div>
                    </div>
                    
                    <div class="bg-white p-3 rounded-lg border border-gray-200">
                        <div class="flex items-center justify-between mb-2">
                            <h5 class="font-semibold text-gray-900">Airbnb</h5>
                            <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">91% Match</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2">Culture fit: Impact-driven, diverse, growth-oriented</p>
                        <div class="flex flex-wrap gap-1">
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Global impact</span>
                            <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Data-centric</span>
                            <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Fast-paced</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <button class="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors">
                🔍 Find More Matches
            </button>
        </div>
    `);
}

function createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold text-gray-900">${title}</h3>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                ${content}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

// Add drag and drop functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('border-blue-500', 'bg-blue-100/50');
        dropZone.classList.remove('border-blue-300');
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-blue-500', 'bg-blue-100/50');
        dropZone.classList.add('border-blue-300');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-blue-500', 'bg-blue-100/50');
        dropZone.classList.add('border-blue-300');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            document.getElementById('fileInput').files = files;
            handleFileUpload({ target: { files: files } });
        }
    });
}); 