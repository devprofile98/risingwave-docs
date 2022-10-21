/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
 
  MainSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'What is RisingWave?',
        },
        
        {
          type: 'doc',
          id: 'architecture',
          label: 'Architecture',
        }
      ]
    },

    {
      type: 'category',
      label: 'Get started',
      link: {type: 'doc', id: 'get-started'},
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'install-run-connect',
          label: 'Install, run, and connect to RisingWave',
        },
        {
          type: 'category', 
          label: 'Ingest streaming data', 
          link: {type: 'doc', id: 'sql/commands/sql-create-source'},
          items: 
          [
            {
              type: 'autogenerated',
              dirName: 'sql/create-source',
            }
          ]
        },
        {
          type: 'doc',
          id: 'query-manage-data',
          label: 'Query and manage data',
        },
        {type: 'ref', 
        label: 'Output data', 
        id: 'sql/commands/sql-create-sink'
        }
      ]
    },
    
    {
      type: 'category',
      label: 'Tutorials',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'tutorials/real-time-ad-performance-analysis',
          label: 'Real-time ad performance analysis',
        },
        {
          type: 'doc',
          id: 'tutorials/server-performance-anomaly-detection',
          label: 'Server performance anomaly detection',
        },
        {
          type: 'doc',
          id: 'tutorials/fast-twitter-events-processing',
          label: 'Fast Twitter events processing',
        },
        {
          type: 'doc',
          id: 'tutorials/clickstream-analysis',
          label: 'Clickstream analysis',
        },
      ]
    },

    {
      type: 'category',
      label: 'How-to guides',
      collapsible: true,
      collapsed: true,
      items: 
      [ 
        {type: 'ref', 
        label: 'Use time window functions', 
        id: 'sql/functions-operators/sql-function-time-window'
        },

        {
          type: 'doc',
          id: 'guides/nested-columns-arrays',
          label: 'Define and access nested columns',
        },
        
      ]
    },

  {
    type: 'category',
    label: 'SQL reference',
    collapsible: true,
    collapsed: true,
    items: 
    [{
      type: 'category',
      label: 'SQL syntax',
      items: 
        [
          {
            type: 'doc',
            id: 'sql/syntax/sql-syntax-value-exp',
            label: 'Value expressions',
          },
        
        ]
        },
      {
        type: 'doc',
        id: 'sql/sql-data-types',
        label: 'Data types',
      },
      {
        type: 'category',
        label: 'Queries',
        items: 
        [
          {
            type: 'doc',
            id: 'sql/queries/sql-queries-top-n',
            label: 'Top-N',
          },
        ]
      },  
      {
      type: 'category',
      label: 'Functions and operators',
      items: 
        [
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-logical',
            label: 'Logical',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-comparison',
            label: 'Comparison',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-time-window',
            label: 'Time window',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-cast',
            label: 'Cast',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-mathematical',
            label: 'Mathematical',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-bitstring',
            label: 'Bit string',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-string',
            label: 'String',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-datetime',
            label: 'Date/time',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-aggregate',
            label: 'Aggregate',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-conditional',
            label: 'Conditional',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-sys-info',
            label: 'System information',
          },
          {
            type: 'doc',
            id: 'sql/functions-operators/sql-function-array',
            label: 'Array',
          },
        
        ]
        },
      {
      type: 'category',
      label: 'Commands',
      items: 
        [
          {
            type: 'autogenerated',
            dirName: 'sql/commands',
          },
        
        ]
        },
     'sql/psql-commands',
      ],
    },

    {
      type: 'doc',
      id: 'release-notes',
      label: 'Release notes'
      },
    ]
    
};


module.exports = sidebars;
