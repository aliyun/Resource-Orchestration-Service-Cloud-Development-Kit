import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './index.stack';

test('Test index of sls with ros parameter.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.IndexTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          projectName: {
            Type: 'String',
            Description:
              'Project name:1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).2. Must start and end with lowercase letters and numbers.3. The name length is 3-63 characters.',
            MaxLength: 63,
            MinLength: 3,
          },
          fullTextIndex: {
            Type: 'Json',
            Description:
              'Full-text indexing configuration.Full-text indexing and key indexing must have at least one enabled.',
          },
          logstoreName: {
            Type: 'String',
            Description:
              'Logstore name:1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).2. Must start and end with lowercase letters and numbers.3. The name length is 3-63 characters.',
            MaxLength: 63,
            MinLength: 3,
          },
          keyIndices: {
            Type: 'CommaDelimitedList',
            Description: 'Key index configurations.Full-text indexing and key indexing must have at least one enabled.',
          },
          logReduce: {
            Type: 'Boolean',
            AllowedValues: ['true', 'false'],
            Description: 'Whether to enable log reduce. Default to false.',
          },
        },
        Resources: {
          myIndex: {
            Type: 'ALIYUN::SLS::Index',
            Properties: {
              FullTextIndex: {
                Ref: 'fullTextIndex',
              },
              LogstoreName: {
                Ref: 'logstoreName',
              },
              ProjectName: {
                Ref: 'projectName',
              },
              KeyIndices: {
                Ref: 'keyIndices',
              },
              LogReduce: {
                Ref: 'logReduce',
              },
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Test index of sls with detailed props info.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.IndexPropTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          myIndex: {
            Type: 'ALIYUN::SLS::Index',
            Properties: {
              FullTextIndex: {
                IncludeChinese: true,
                CaseSensitive: true,
                Enable: false,
              },
              LogstoreName: 'logstorename',
              ProjectName: 'testindex',
              KeyIndices: [
                {
                  Type: 'long',
                  JsonKeyIndices: [
                    {
                      Type: 'long',
                      Name: 'jsonkeyname',
                    },
                  ],
                  Name: 'keyindices',
                },
              ],
              LogReduce: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Test index of sls with detailed props info which can be deployed in ros console.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.IndexPropDeployTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Outputs: {
          LogstoreName: {
            Description: 'Logstore name.',
            Value: {
              'Fn::GetAtt': ['Logstore', 'LogstoreName'],
            },
          },
          Name: {
            Description: 'Project name.',
            Value: {
              'Fn::GetAtt': ['Project', 'Name'],
            },
          },
        },
        Resources: {
          Index: {
            DependsOn: ['Project', 'Logstore'],
            Type: 'ALIYUN::SLS::Index',
            Properties: {
              LogstoreName: {
                'Fn::GetAtt': ['Logstore', 'LogstoreName'],
              },
              ProjectName: {
                'Fn::GetAtt': ['Project', 'Name'],
              },
              KeyIndices: [
                {
                  Name: 'k1,k3',
                  EnableAnalytics: true,
                  Delimiter: ',',
                  CaseSensitive: true,
                  Alias: 'ros1',
                  IncludeChinese: true,
                  Type: 'text',
                },
                {
                  Name: 'k2',
                  EnableAnalytics: true,
                  Delimiter: ',',
                  CaseSensitive: true,
                  JsonKeyIndices: [
                    {
                      Type: 'text',
                      Alias: 'ros-alias',
                      EnableAnalytics: true,
                      Name: 'JsonKeyIndices1',
                    },
                    {
                      Type: 'long',
                      Alias: 'ros-alias',
                      EnableAnalytics: false,
                      Name: 'JsonKeyIndices2',
                    },
                  ],
                  Alias: 'ros-extension2',
                  IncludeChinese: true,
                  Type: 'json',
                },
              ],
              FullTextIndex: {
                CaseSensitive: true,
                Delimiter: ',',
                IncludeChinese: true,
                Enable: true,
              },
              LogReduce: true,
            },
          },
          Project: {
            Type: 'ALIYUN::SLS::Project',
            Properties: {
              Name: 'ros-test-project1',
              Description: 'ros-describe',
            },
          },
          Logstore: {
            Type: 'ALIYUN::SLS::Logstore',
            Properties: {
              LogstoreName: 'ros-logs-tore-name1',
              ProjectName: {
                'Fn::GetAtt': ['Project', 'Name'],
              },
              AppendMeta: false,
              AutoSplit: false,
              EnableTracking: false,
              PreserveStorage: false,
              ShardCount: 2,
              TTL: 30,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
