document.addEventListener('DOMContentLoaded', () => {
    
    const tableCells = document.querySelectorAll('.comp-grid td, .comp-grid th');
    tableCells.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            const colIndex = cell.getAttribute('data-col');
            if (colIndex !== "0") { 
                document.querySelectorAll(`.comp-grid [data-col="${colIndex}"]`).forEach(el => el.classList.add('hover-col'));
            }
        });
        cell.addEventListener('mouseleave', () => {
            const colIndex = cell.getAttribute('data-col');
            document.querySelectorAll(`.comp-grid [data-col="${colIndex}"]`).forEach(el => el.classList.remove('hover-col'));
        });
    });

    const tourData = [
        {
            targetId: "target-header",
            title: "Introduction",
            text: `
                <p>Our beginner-friendly walkthrough of your Comparable Sales Report tool is designed to ensure you are able to fully understand your report. Our goal is to explain your report in a way that is understandable even if you have zero background in market value analysis.</p>
                <p>Click <strong>Next</strong> to continue.</p>
            `
        },
        {
            targetId: "target-header",
            title: "Purpose of a Comparable Sales Report",
            text: `
                <p>A Comparable Sales Report is a market-based valuation analysis. <strong>Its purpose is to estimate what a property would have sold for on the valuation date by comparing it to similar homes that sold around the same time.</strong></p>
                <p>In a Prop 8 appeal, this report is used to show that the county’s enrolled value is too high. If the report supports a value lower than the assessed value on the roll, <strong>that difference may justify a temporary reduction under Proposition 8</strong>. A decline-in-value appeal applies when the property’s assessed value exceeds its fair market value, and that the relevant valuation date is January 1, also known as the <strong>lien date</strong>.</p>
                <p style="color: var(--brand-blue); font-weight: bold; margin-top: 1.5rem;">
                    <i class="fa-solid fa-lightbulb"></i> FOR EXAMPLE, IN YOUR CASE:
                </p>
                <ul>
                    <li>The county had your property <strong>on the roll at $1,352,520</strong>.</li>
                    <li><strong>BUT</strong> the market value analysis indicates it is really worth about $1,217,000.</li>
                    <li><strong>THEREFORE</strong>, the enrolled value should be reduced under Proposition 8.</li>
                </ul>
            `
        },
        {
            targetId: "target-grid-head",
            title: "Report Identity",
            text: `
                <p>The report is laid out as a comparison grid. It places the subject property next to three comparable sales and compares them feature by feature. The columns are:</p>
                <ul>
                    <li><i class="fa-solid fa-house text-blue"></i> <strong>SUBJECT:</strong> The property being valued.</li>
                    <li><i class="fa-solid fa-house text-blue"></i> <strong>COMPARABLE SALES (1-3):</strong> Similar homes that sold.</li>
                </ul>
                <p>This side-by-side format helps the reader see how each comparable differs from the subject and how those differences affect value.</p>
            `
        },
        {
            targetCol: "1", 
            title: "Subject Property (Overview)",
            text: `
                <p>The subject property is the property being valued in the appeal. It is the property whose market value the report is trying to estimate.</p>
                <table class="tour-example-table">
                    <tr><th>Item</th><th>Subject Property</th></tr>
                    <tr><td>Address</td><td>25131 Rivendell Dr, Lake Forest, CA 92630</td></tr>
                    <tr><td>APN</td><td>614-083-07</td></tr>
                    <tr><td>Roll Value</td><td>$1,352,520</td></tr>
                    <tr><td>Lien Date</td><td>1/1/2024</td></tr>
                    <tr><td>Year Built</td><td>1969</td></tr>
                    <tr><td>Bedrooms</td><td>4</td></tr>
                    <tr><td>Bathrooms</td><td>2</td></tr>
                    <tr><td>Improvement Size</td><td>1,955 sq ft</td></tr>
                    <tr><td>Lot Area</td><td>6,120 sq ft</td></tr>
                </table>
                <p>Every comparison in the report is made against this property. When a comparable is described as inferior or superior, that means it is being compared to the subject.</p>
            `
        },
        {
            targetId: "target-adj-header",
            title: "Understanding Adjustments",
            text: `
                <p>Adjustments are applied to each comparable.</p>
                <p style="font-weight: bold; color: var(--text-main); font-size: 1.05rem;">
                    <i class="fa-solid fa-key text-blue"></i> Rule:
                </p>
                <ul>
                    <li>If the comp is inferior &rarr; add value (+)</li>
                    <li>If the comp is superior &rarr; subtract value (−)</li>
                </ul>
                <p>This is because the goal is to estimate what the comparable would have sold for if it had the same features as the subject property. Adjustments are made to the comparable sales, never to the subject property.</p>
                <p>Comparable sales should be similar in location, size, age, and features, and the strongest sales are generally those closest to the January 1 valuation date and proximity. <em>NOTE: Sales after the lien date are limited, while earlier sales may be used with time adjustment if needed.</em></p>
                <p style="margin-top: 1.5rem;">
                    <strong style="color: #1e293b; font-size: 1.05rem;">
                        <i class="fa-solid fa-circle-exclamation text-blue" style="font-size: 1.2rem;"></i> Why adjustments are needed (Very Important):
                    </strong>
                </p>
                <p style="font-style: italic; color: #4b5563; font-size: 1rem;">No two homes are identical. So we ask: "If this comparable were exactly like the subject property… what would it have sold for?"</p>
            `
        },
        {
            targetCol: "2", 
            title: "Comparable Sale 1 Analysis",
            text: `
                <p>Comparable Sale 1 is especially notable because it is only 105.6 feet from the subject, making it extremely close in location. It also shares the same year built, which strengthens its comparability. However, it is smaller and has fewer bedrooms and bathrooms than the subject.</p>
                <table class="tour-example-table">
                    <tr><th>Feature</th><th>Subject</th><th>Comp 1</th><th>Adjustment</th></tr>
                    <tr><td>Bedrooms</td><td>4</td><td>3</td><td>+$20,000</td></tr>
                    <tr><td>Bathrooms</td><td>2</td><td>1</td><td>+$20,000</td></tr>
                    <tr><td>Improvement Size</td><td>1,955</td><td>1,697</td><td>+$54,000</td></tr>
                    <tr><td>Lot Area</td><td>6,120</td><td>5,400</td><td>+$10,000</td></tr>
                </table>
                <p style="font-size: 1.05rem;">
                    <i class="fa-solid fa-arrow-right text-blue"></i> <strong>Total Adjustment:</strong> +$104,000<br>
                    <i class="fa-solid fa-arrow-right text-blue"></i> <strong>Adjusted Value:</strong> $1,100,000 + $104,000 = $1,204,000
                </p>
                <p><strong>Explanation:</strong> Comp 1 sold for $1.1M, but it was inferior to the subject in several important ways. After adjusting it as though it had the subject’s bedroom count, bathroom count, size, and lot size, it indicates the subject would be worth about $1,204,000.</p>
                <a class="quick-link" data-step="4"><i class="fa-solid fa-rotate-left"></i> Review Adjustment Rules</a>
            `
        },
        {
            targetCol: "3", 
            title: "Comparable Sale 2 Analysis",
            text: `
                <p>Comp 2 sold for $1,320,000 and is 0.27 miles away. It is closer in bathroom count than Comp 1, but it is larger than the subject and sits on a larger lot.</p>
                <table class="tour-example-table">
                    <tr><th>Feature</th><th>Subject</th><th>Comp 2</th><th>Adjustment</th></tr>
                    <tr><td>Bedrooms</td><td>4</td><td>3</td><td>+$20,000</td></tr>
                    <tr><td>Bathrooms</td><td>2</td><td>2</td><td>$0</td></tr>
                    <tr><td>Improvement Size</td><td>1,955</td><td>2,032</td><td>($16,000)</td></tr>
                    <tr><td>Lot Area</td><td>6,120</td><td>7,000</td><td>($12,000)</td></tr>
                </table>
                <p style="font-size: 1.05rem;">
                    <i class="fa-solid fa-arrow-right text-blue"></i> <strong>Total Adjustment:</strong> ($8,000)<br>
                    <i class="fa-solid fa-arrow-right text-blue"></i> <strong>Adjusted Value:</strong> $1,320,000 − $8,000 = $1,312,000
                </p>
                <p><strong>Explanation:</strong> Comparable Sale 2 has one fewer bedroom than the subject, so the report adds value for that difference. However, it is also larger and sits on a larger lot than the subject, so those superior features require downward adjustments. After all adjustments are applied, it indicates a value of $1,312,000 for the subject.</p>
            `
        },
        {
            targetCol: "4", 
            title: "Comparable Sale 3 Analysis",
            text: `
                <p>Comparable Sale 3 is also nearby at 0.29 miles and sold on 10/11/2023, closer to the lien date than Comparable 1. Like Comparable 2, it has one fewer bedroom than the subject, but it is larger and on a larger lot.</p>
                <table class="tour-example-table">
                    <tr><th>Feature</th><th>Subject</th><th>Comp 3</th><th>Adjustment</th></tr>
                    <tr><td>Bedrooms</td><td>4</td><td>3</td><td>+$20,000</td></tr>
                    <tr><td>Bathrooms</td><td>2</td><td>2</td><td>$0</td></tr>
                    <tr><td>Improvement Size</td><td>1,955</td><td>2,032</td><td>($16,000)</td></tr>
                    <tr><td>Lot Area</td><td>6,120</td><td>7,400</td><td>($18,000)</td></tr>
                </table>
                <p style="font-size: 1.05rem;">
                    <i class="fa-solid fa-arrow-right text-blue"></i> <strong>Total Adjustment:</strong> ($14,000)<br>
                    <i class="fa-solid fa-arrow-right text-blue"></i> <strong>Adjusted Value:</strong> $1,150,000 − $14,000 = $1,136,000
                </p>
                <p><strong>Explanation:</strong> Comparable Sale 3 is adjusted upward for having fewer bedrooms than the subject, but downward because it is superior in improvement size and lot size. After all adjustments are applied, it supports an adjusted value of $1,136,000.</p>
            `
        },
        {
            targetId: "target-add-rows",
            title: "Additional Rows in the Grid",
            text: `
                <p>The report also includes rows for view, year built, remodeled/condition, pool, noise/traffic, and property subtype. These rows help the reader understand the broader comparison between the subject and the comparable sales, even if a separate dollar adjustment was not applied in every instance.</p>
                <p><strong>For example:</strong> The subject was built in 1969.</p>
                <ul>
                    <li>Comparable 1 was also built in 1969.</li>
                    <li>Comparables 2 and 3 were built in 1979.</li>
                </ul>
                <p>The report also shows that all properties are single-family residences and that the subject and comparables do not appear to have a noise/traffic issue noted in the grid. These details help demonstrate that the sales are broadly comparable in use and neighborhood setting.</p>
            `
        },
        {
            targetId: "target-total-net",
            title: "Total Net Adjustments",
            text: `
                <p>The report totals all line-item adjustments for each comparable into a single Total Net Adjustment number.</p>
                <table class="tour-example-table">
                    <tr><th>Comparable</th><th>Total Net Adjustment</th></tr>
                    <tr><td>Comparable Sale 1</td><td>+$104,000</td></tr>
                    <tr><td>Comparable Sale 2</td><td>($8,000)</td></tr>
                    <tr><td>Comparable Sale 3</td><td>($14,000)</td></tr>
                </table>
                <p>This number reflects the overall difference between the comparable and the subject after considering the adjusted features.</p>
                <p>A positive net adjustment means the comparable was overall inferior to the subject. A negative net adjustment means the comparable was overall superior to the subject.</p>
                <a class="quick-link" data-step="4"><i class="fa-solid fa-calculator"></i> Revisit Adjustment Rules</a>
            `
        },
        {
            targetId: "target-final-adj",
            title: "Final Adjusted Values",
            text: `
                <p>After applying the total net adjustments to the original sale prices, the report arrives at a Final Adjusted Value for each comparable.</p>
                <table class="tour-example-table">
                    <tr><th>Comparable</th><th>Sale Price</th><th>Net Adjustment</th><th>Final Adjusted Value</th></tr>
                    <tr><td>Comparable Sale 1</td><td>$1,100,000</td><td>+$104,000</td><td>$1,204,000</td></tr>
                    <tr><td>Comparable Sale 2</td><td>$1,320,000</td><td>($8,000)</td><td>$1,312,000</td></tr>
                    <tr><td>Comparable Sale 3</td><td>$1,150,000</td><td>($14,000)</td><td>$1,136,000</td></tr>
                </table>
                <p>These adjusted values are the core market indications in the report. Each one represents the value that comparable suggests for the subject after accounting for differences.</p>
            `
        },
        {
            targetId: "target-adj-sqft",
            title: "Adjusted Price Per Square Foot",
            text: `
                <p>The report also provides an Adjusted $/Sqft (SUBJ) figure for each comparable:</p>
                <table class="tour-example-table">
                    <tr><th>Comparable</th><th>Adjusted $/Sqft (SUBJ)</th></tr>
                    <tr><td>Comparable Sale 1</td><td>616</td></tr>
                    <tr><td>Comparable Sale 2</td><td>671</td></tr>
                    <tr><td>Comparable Sale 3</td><td>581</td></tr>
                </table>
                <p>This serves as a consistency check. It helps the reader see the adjusted value indications on a price-per-square-foot basis tied back to the subject property.</p>
            `
        },
        {
            targetId: "target-weight",
            title: "Weighting and Reconciliation",
            text: `
                <p>Once the comparable sales have been adjusted, the next step is to reconcile them into a single final value opinion. The Prop 8 guide explains that the adjusted sales should be weighed and reconciled to a final value conclusion.</p>
                <p>In this report, each comparable is weighted equally at 33%.</p>
                <table class="tour-example-table">
                    <tr><th>Comparable</th><th>Weight</th></tr>
                    <tr><td>Comparable Sale 1</td><td>33%</td></tr>
                    <tr><td>Comparable Sale 2</td><td>33%</td></tr>
                    <tr><td>Comparable Sale 3</td><td>33%</td></tr>
                </table>
                <p>By weighting each comparable equally, the report treats all three as meaningful indicators of value.</p>
            `
        },
        {
            targetId: "target-final-val",
            title: "Final Value Indicated By Market Approach",
            text: `
                <p>At the bottom of the report, the grid concludes:</p>
                <p style="font-size: 1.1rem; color: #1e293b;">
                    <strong><i class="fa-solid fa-flag-checkered text-blue"></i> Final Value Indicated By Market Approach: $1,217,000</strong>
                </p>
                <p>This is the report’s final opinion of the subject property’s market value as of the lien date.</p>
            `
        },
        {
            targetId: "target-roll-val",
            title: "Comparison to the Enrolled Value",
            text: `
                <p>The significance of the report becomes clear when the market value conclusion is compared to the enrolled value on the roll.</p>
                <table class="tour-example-table">
                    <tr><th>Item</th><th>Amount</th></tr>
                    <tr><td>Enrolled / Roll Value</td><td>$1,352,520</td></tr>
                    <tr><td>Final Market Value Conclusion</td><td>$1,217,000</td></tr>
                    <tr><td><strong>Difference</strong></td><td><strong>$135,520</strong></td></tr>
                </table>
                <p>This means the report supports the position that the property was enrolled $135,520 above market value as of January 1, 2024.</p>
                <p>That difference is what supports the Prop 8 assessment reduction request.</p>
                <a class="quick-link" data-step="13"><i class="fa-solid fa-arrow-left-long"></i> See how final value was calculated</a>
            `
        },
        {
            targetId: "target-notes",
            title: "Final Conclusion & Key Support",
            text: `
                <p><strong><i class="fa-solid fa-scale-balanced text-blue"></i> Market Value vs. Assessed Value (Core Argument)</strong></p>
                <ul>
                    <li>Enrolled Value: $1,352,520</li>
                    <li>Supported Market Value: $1,217,000</li>
                    <li>Overvaluation: ~$135,520</li>
                    <li>All three adjusted comparables fall below the enrolled value, supporting a decline-in-value as of 1/1/2024 (lien date).</li>
                </ul>
                <p><strong><i class="fa-solid fa-1 text-blue"></i> Comparable 1 (Strongest Location Indicator)</strong></p>
                <ul>
                    <li>Located ~105 feet from subject (same micro-location).</li>
                    <li>Sold for $1,100,000 and adjusted to $1,204,000.</li>
                    <li>Required upward adjustments due to being inferior. Even after adjustments, it is still well below assessed value.</li>
                </ul>
                <p><strong><i class="fa-solid fa-2 text-blue"></i> Comparable 2 (Most Current Sale)</strong></p>
                <ul>
                    <li>Sold 03/11/2024 (closest to lien date; highly relevant timing).</li>
                    <li>Minimal net adjustment (-$8,000) indicates strong comparability. Adjusted value: $1,312,000.</li>
                </ul>
                <p><strong><i class="fa-solid fa-3 text-blue"></i> Comparable 3 (Lower-End Market Indicator)</strong></p>
                <ul>
                    <li>Sold for $1,150,000, adjusted to $1,136,000.</li>
                    <li>Represents the lower bound of market range, confirming subject value trends closer to low–mid $1.1M range.</li>
                </ul>
            `
        }
    ];

    let currentStep = 0;
    const modal = document.getElementById('tour-modal');
    const backdrop = document.getElementById('tour-backdrop');
    const titleEl = document.getElementById('tour-step-title');
    const textEl = document.getElementById('tour-content-text');
    const counterEl = document.getElementById('tour-counter');
    const progressBar = document.getElementById('tour-progress-bar');
    
    // Global listener for Quick Links inserted dynamically
    document.addEventListener('click', function(e) {
        const link = e.target.closest('.quick-link');
        if (link) {
            e.preventDefault();
            const stepIndex = parseInt(link.getAttribute('data-step'), 10);
            if (!isNaN(stepIndex) && stepIndex >= 0 && stepIndex < tourData.length) {
                currentStep = stepIndex;
                updateTour();
            }
        }
    });

    // Reusable, Redesigned Accordion Template
    const getAccordionHTML = (titleText) => `
        <div class="tour-accordion">
            <button class="accordion-header" id="tour-accordion-btn">
                <span>[placeholder]</span>
                <i class="fa-solid fa-chevron-down"></i> 
            </button>
            <div class="accordion-content" id="tour-accordion-content">
                <ol>
                    <li>This is a placeholder note for the selected section. It can contain secondary instructions or definitions.</li>
                    <li>If you need further clarification on certain information being requested, please review the Assessify guidelines.</li>
                    <li>Be prepared to submit this evidence as soon as the Assessor's Office makes a request for it.</li>
                </ol>
            </div>
        </div>
    `;

    function updateTour() {
        const step = tourData[currentStep];
        
        backdrop.classList.remove('hidden');
        document.querySelectorAll('.tour-highlight-active').forEach(el => el.classList.remove('tour-highlight-active'));
        
        // Reset scroll
        textEl.scrollTop = 0;

        let primaryTargetEl = null;

        if (step.targetCol) {
            const columnCells = document.querySelectorAll(`.comp-grid [data-col="${step.targetCol}"]`);
            columnCells.forEach(cell => cell.classList.add('tour-highlight-active'));
            if(columnCells.length > 0) primaryTargetEl = columnCells[0]; 
        } else if (step.targetId) {
            primaryTargetEl = document.getElementById(step.targetId);
            if(primaryTargetEl) primaryTargetEl.classList.add('tour-highlight-active');
        }

        if(primaryTargetEl) {
            primaryTargetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

            setTimeout(() => { 
                const rect = primaryTargetEl.getBoundingClientRect();
                const tourArrow = modal.querySelector('.tour-arrow');

                if (step.targetCol) {
                    const isLeftHalf = rect.left < window.innerWidth / 2;
                    modal.style.top = '15%'; 
                    
                    if (isLeftHalf) {
                        modal.style.left = (rect.right + 25) + 'px'; 
                        tourArrow.style.top = '30px';
                        tourArrow.style.left = '-15px';
                        tourArrow.style.borderTop = '15px solid transparent';
                        tourArrow.style.borderBottom = '15px solid transparent';
                        tourArrow.style.borderRight = '15px solid #ffffff'; 
                        tourArrow.style.borderLeft = 'none';
                    } else {
                        modal.style.left = (rect.left - modal.offsetWidth - 25) + 'px';
                        tourArrow.style.top = '30px';
                        tourArrow.style.left = '100%';
                        tourArrow.style.borderTop = '15px solid transparent';
                        tourArrow.style.borderBottom = '15px solid transparent';
                        tourArrow.style.borderLeft = '15px solid #ffffff'; 
                        tourArrow.style.borderRight = 'none';
                    }
                } else {
                    const targetCenter = rect.top + (rect.height / 2);
                    if (targetCenter < window.innerHeight / 2) {
                        modal.style.top = (rect.bottom + window.scrollY + 20) + 'px'; 
                        modal.style.left = Math.max(20, rect.left) + 'px'; 
                        tourArrow.style.top = '-15px';
                        tourArrow.style.left = '30px';
                        tourArrow.style.borderBottom = '15px solid #f8fafc'; 
                        tourArrow.style.borderTop = 'none';
                        tourArrow.style.borderLeft = '15px solid transparent';
                        tourArrow.style.borderRight = '15px solid transparent';
                    } else {
                        modal.style.top = (rect.top + window.scrollY - modal.offsetHeight - 20) + 'px';
                        modal.style.left = Math.max(20, rect.left) + 'px';
                        tourArrow.style.top = '100%'; 
                        tourArrow.style.left = '30px';
                        tourArrow.style.borderTop = '15px solid #ffffff'; 
                        tourArrow.style.borderBottom = 'none';
                        tourArrow.style.borderLeft = '15px solid transparent';
                        tourArrow.style.borderRight = '15px solid transparent';
                    }
                }
            }, 150); 
        }

        titleEl.innerHTML = step.title;
        // Inject Text + Accordion
        textEl.innerHTML = step.text + getAccordionHTML(step.title);
        
        // Re-attach Accordion Event Listener to new HTML
        const accBtn = document.getElementById('tour-accordion-btn');
        accBtn.addEventListener('click', function() {
            const accContent = document.getElementById('tour-accordion-content');
            accContent.classList.toggle('show');
            accBtn.classList.toggle('active'); // Toggles the chevron rotation
            if(accContent.classList.contains('show')) {
                setTimeout(() => textEl.scrollTop = textEl.scrollHeight, 50);
            }
        });

        counterEl.textContent = `${currentStep + 1} of ${tourData.length}`;
        const progressPercentage = ((currentStep + 1) / tourData.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        document.getElementById('tour-prev').style.visibility = currentStep === 0 ? 'hidden' : 'visible';
        document.getElementById('tour-next').innerHTML = currentStep === tourData.length - 1 ? 'Finish' : 'Next <i class="fa-solid fa-chevron-right"></i>';
    }

    function endTour() {
        modal.classList.add('hidden');
        backdrop.classList.add('hidden');
        document.querySelectorAll('.tour-highlight-active').forEach(el => el.classList.remove('tour-highlight-active'));
    }

    document.getElementById('start-tour-btn').addEventListener('click', () => {
        currentStep = 0;
        modal.classList.remove('hidden');
        updateTour();
    });

    document.getElementById('tour-next').addEventListener('click', () => {
        if (currentStep < tourData.length - 1) {
            currentStep++;
            updateTour();
        } else {
            endTour();
        }
    });

    document.getElementById('tour-prev').addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateTour();
        }
    });

    document.getElementById('tour-close').addEventListener('click', endTour); 
    backdrop.addEventListener('click', endTour); 
});