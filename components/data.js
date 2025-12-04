// data.js - Fichier contenant toutes les données du projet GEF 7 Congo IP

const GEF7Data = {
    partners: [
        {
            id: 1,
            name: 'COMIFAC',
            displayName: 'COMIFAC',
            component: 'COMP5',
            componentDisplay: 'Component 5: Program Coordination',
            amount_committed: 13206.00,
            budget_available: 158741.72,
            progression: 100.00,
            report_status: 'R',
            report_status_display: 'Received',
            actions_needed: 'Need to verify the accuracy of reporting of REPELEAC activities 85%, COMIFAC activities are less than 10% progress. Need to see extension 9 max 07/2027, or if we shift activities into GEF 8, and so we need to demish by 55% the budget available in GEF 7',
            extension_needed: true,
            extension_details: 'Need extension until 07/2027',
            contract_start_date: '2023-01-01',
            contract_end_date: '2025-12-31'
        },
        {
            id: 2,
            name: 'REPALEAC',
            displayName: 'REPALEAC',
            component: 'COMP5',
            componentDisplay: 'Component 5: Program Coordination',
            amount_committed: 186916.00,
            budget_available: 186916.00,
            progression: 100.00,
            report_status: 'VPM',
            report_status_display: 'Validated by PM',
            actions_needed: null,
            extension_needed: false,
            extension_details: '',
            contract_start_date: '2023-03-15',
            contract_end_date: '2025-03-14'
        },
        {
            id: 3,
            name: 'RAIN',
            displayName: 'Rainforest Alliance',
            component: 'COMP3',
            componentDisplay: 'Component 3: Community Empowerment',
            amount_committed: 4962916.00,
            budget_available: 4962916.00,
            progression: 100.00,
            report_status: 'VPM',
            report_status_display: 'Validated by PM',
            actions_needed: 'No extension needed at the moment',
            extension_needed: false,
            extension_details: '',
            contract_start_date: '2023-04-01',
            contract_end_date: '2024-12-31'
        },
        {
            id: 4,
            name: 'REWILD',
            displayName: 'RE:wild',
            component: 'COMP2',
            componentDisplay: 'Component 2: Management Interventions',
            amount_committed: 1570608.16,
            budget_available: 1570608.16,
            progression: 100.00,
            report_status: 'NV',
            report_status_display: 'Not Validated',
            actions_needed: 'Closure contract',
            extension_needed: false,
            extension_details: '',
            contract_start_date: '2023-05-15',
            contract_end_date: '2024-11-14'
        },
        {
            id: 5,
            name: 'UNODC',
            displayName: 'UNODC',
            component: 'COMP2',
            componentDisplay: 'Component 2: Management Interventions',
            amount_committed: 249280.00,
            budget_available: 249280.00,
            progression: 100.00,
            report_status: 'NV',
            report_status_display: 'Not Validated',
            actions_needed: 'See what the situation is about the activities they could do, due to a lack of funds, maybe extension needed at the moment',
            extension_needed: true,
            extension_details: 'Extension needed',
            contract_start_date: '2023-02-01',
            contract_end_date: '2024-06-30'
        },
        {
            id: 6,
            name: 'USFS',
            displayName: 'US Forest Service',
            component: 'COMP1',
            componentDisplay: 'Component 1: Land Use Planning',
            amount_committed: 43870.00,
            budget_available: 43870.00,
            progression: 100.00,
            report_status: 'VPM',
            report_status_display: 'Validated by PM',
            actions_needed: 'Closure contract',
            extension_needed: false,
            extension_details: '',
            contract_start_date: '2023-03-01',
            contract_end_date: '2024-09-30'
        },
        {
            id: 7,
            name: 'WCMC',
            displayName: 'WCMC',
            component: 'COMP4',
            componentDisplay: 'Component 4: Knowledge Management',
            amount_committed: 141411.00,
            budget_available: 141411.00,
            progression: 100.00,
            report_status: 'VPM',
            report_status_display: 'Validated by PM',
            actions_needed: 'See if extension is needed',
            extension_needed: true,
            extension_details: 'Extension may be needed',
            contract_start_date: '2023-06-01',
            contract_end_date: '2025-05-31'
        },
        {
            id: 8,
            name: 'WCS',
            displayName: 'Wildlife Conservation Society',
            component: 'COMP2',
            componentDisplay: 'Component 2: Management Interventions',
            amount_committed: 44000.00,
            budget_available: 44000.00,
            progression: 100.00,
            report_status: 'VPM',
            report_status_display: 'Validated by PM',
            actions_needed: 'No extension needed',
            extension_needed: false,
            extension_details: '',
            contract_start_date: '2023-03-01',
            contract_end_date: '2024-08-31'
        },
        {
            id: 9,
            name: 'WOODWELL',
            displayName: 'Woodwell Climate',
            component: 'COMP2',
            componentDisplay: 'Component 2: Management Interventions',
            amount_committed: 6480.00,
            budget_available: 6480.00,
            progression: 100.00,
            report_status: 'VPM',
            report_status_display: 'Validated by PM',
            actions_needed: 'At the moment no extension needed, in progress as per contract',
            extension_needed: false,
            extension_details: '',
            contract_start_date: '2023-03-01',
            contract_end_date: '2024-08-31'
        },
        {
            id: 10,
            name: 'LJMU',
            displayName: 'Liverpool John Moores University',
            component: 'COMP4',
            componentDisplay: 'Component 4: Knowledge Management',
            amount_committed: 42000.00,
            budget_available: 42000.00,
            progression: 100.00,
            report_status: 'VPM',
            report_status_display: 'Validated by PM',
            actions_needed: 'Extended until 30/11/2025',
            extension_needed: true,
            extension_details: 'Extended until 30/11/2025',
            contract_start_date: '2023-06-01',
            contract_end_date: '2025-11-30'
        },
        {
            id: 11,
            name: 'CITES',
            displayName: 'CITES MIKE',
            component: 'COMP2',
            componentDisplay: 'Component 2: Management Interventions',
            amount_committed: 16800.00,
            budget_available: 16800.00,
            progression: 100.00,
            report_status: 'VPM',
            report_status_display: 'Validated by PM',
            actions_needed: 'Not needed. All completed.',
            extension_needed: false,
            extension_details: '',
            contract_start_date: '2023-02-01',
            contract_end_date: '2024-06-30'
        },
        {
            id: 12,
            name: 'RBP',
            displayName: 'RBP (Multiple Components)',
            component: 'COMP1',
            componentDisplay: 'Component 1: Land Use Planning',
            amount_committed: 200000.00,
            budget_available: 200000.00,
            progression: 100.00,
            report_status: 'VPM',
            report_status_display: 'Validated by PM',
            actions_needed: 'Not needed. All completed.',
            extension_needed: false,
            extension_details: '',
            contract_start_date: '2023-01-01',
            contract_end_date: '2024-12-31'
        }
    ],
    
    reports: [
        { partner: 'COMIFAC', report_period: 'Jan-Jun 2024', status: 'VPM', submission_date: '2024-06-15', validation_date: '2024-06-20' },
        { partner: 'COMIFAC', report_period: 'Jul-Dec 2023', status: 'VPM', submission_date: '2023-12-10', validation_date: '2023-12-15' },
        { partner: 'REPALEAC', report_period: 'Jan-Jun 2024', status: 'VPM', submission_date: '2024-06-10', validation_date: '2024-06-15' },
        { partner: 'REPALEAC', report_period: 'Jul-Dec 2023', status: 'VPM', submission_date: '2023-12-05', validation_date: '2023-12-10' },
        { partner: 'RAIN', report_period: 'Jan-Jun 2024', status: 'VPM', submission_date: '2024-06-20', validation_date: '2024-06-25' },
        { partner: 'RAIN', report_period: 'Jul-Dec 2023', status: 'VPM', submission_date: '2023-12-15', validation_date: '2023-12-20' },
        { partner: 'REWILD', report_period: 'Jan-Jun 2024', status: 'NV', submission_date: '2024-06-25', validation_date: null },
        { partner: 'REWILD', report_period: 'Jul-Dec 2023', status: 'VPM', submission_date: '2023-12-20', validation_date: '2023-12-25' },
        { partner: 'UNODC', report_period: 'Jan-Jun 2024', status: 'NV', submission_date: null, validation_date: null },
        { partner: 'UNODC', report_period: 'Jul-Dec 2023', status: 'VPM', submission_date: '2023-12-18', validation_date: '2023-12-22' }
    ],
    
    componentChoices: [
        { value: 'COMP1', label: 'Component 1: Land Use Planning' },
        { value: 'COMP2', label: 'Component 2: Management Interventions' },
        { value: 'COMP3', label: 'Component 3: Community Empowerment' },
        { value: 'COMP4', label: 'Component 4: Knowledge Management' },
        { value: 'COMP5', label: 'Component 5: Program Coordination' }
    ],
    
    reportStatusChoices: [
        { value: 'VPM', label: 'Validated by PM' },
        { value: 'RP', label: 'Under Review' },
        { value: 'NR', label: 'Not Received' },
        { value: 'NV', label: 'Not Validated' },
        { value: 'R', label: 'Received' }
    ]
};

// Fonctions utilitaires pour manipuler les données
const DataUtils = {
    getPartners: () => GEF7Data.partners,
    
    getPartnerById: (id) => GEF7Data.partners.find(p => p.id === id),
    
    getPartnersByComponent: (component) => 
        component ? GEF7Data.partners.filter(p => p.component === component) : GEF7Data.partners,
    
    getPartnersNeedingExtension: () => GEF7Data.partners.filter(p => p.extension_needed),
    
    getReportsByPartner: (partnerName) => 
        GEF7Data.reports.filter(r => r.partner === partnerName),
    
    getComponentStats: () => {
        const stats = {};
        GEF7Data.partners.forEach(partner => {
            if (!stats[partner.component]) {
                stats[partner.component] = {
                    component: partner.componentDisplay,
                    count: 0,
                    totalProgress: 0
                };
            }
            stats[partner.component].count++;
            stats[partner.component].totalProgress += partner.progression;
        });
        
        return Object.values(stats).map(stat => ({
            ...stat,
            avg_progress: stat.totalProgress / stat.count
        }));
    },
    
    getStatusStats: () => {
        const stats = {};
        GEF7Data.partners.forEach(partner => {
            if (!stats[partner.report_status]) {
                stats[partner.report_status] = {
                    report_status: partner.report_status_display,
                    count: 0
                };
            }
            stats[partner.report_status].count++;
        });
        return Object.values(stats);
    },
    
    getTotalPartners: () => GEF7Data.partners.length,
    
    getTotalBudget: () => 
        GEF7Data.partners.reduce((sum, p) => sum + p.amount_committed, 0),
    
    getAverageProgress: () => {
        const total = GEF7Data.partners.reduce((sum, p) => sum + p.progression, 0);
        return total / GEF7Data.partners.length;
    },
    
    getReportStats: () => {
        const totalReports = 45; // Valeur statique basée sur vos données
        const validated = 32;
        const inReview = 8;
        const received = 3;
        const notReceived = 2;
        
        return {
            total_reports: totalReports,
            validated: validated,
            in_review: inReview,
            received: received,
            not_received: notReceived,
            completion_rate: Math.round((validated / totalReports) * 100)
        };
    }
};

// Exposer les données globalement
window.GEF7Data = GEF7Data;
window.DataUtils = DataUtils;