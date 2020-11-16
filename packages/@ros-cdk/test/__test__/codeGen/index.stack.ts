import * as ros from '@ros-cdk/core'
import * as sls from '@ros-cdk/sls';

export class IndexTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const projectName = new ros.RosParameter(this, 'projectName', {
      type: ros.RosParameterType.STRING,
      description: `Project name:1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).2. Must start and end with lowercase letters and numbers.3. The name length is 3-63 characters.`,
      minLength: 3,
      maxLength: 63,
    });

    const fullTextIndex = new ros.RosParameter(this, 'fullTextIndex', {
      type: ros.RosParameterType.JSON,
      description: `Full-text indexing configuration.Full-text indexing and key indexing must have at least one enabled.`,
    });

    const logstoreName = new ros.RosParameter(this, 'logstoreName', {
      type: ros.RosParameterType.STRING,
      description: `Logstore name:1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).2. Must start and end with lowercase letters and numbers.3. The name length is 3-63 characters.`,
      minLength: 3,
      maxLength: 63,
    });

    const keyIndices = new ros.RosParameter(this, 'keyIndices', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
      description: `Key index configurations.Full-text indexing and key indexing must have at least one enabled.`,
    });

    const logReduce = new ros.RosParameter(this, 'logReduce', {
      type: ros.RosParameterType.BOOLEAN,
      description: `Whether to enable log reduce. Default to false.`,
      allowedValues: ['true', 'false'],
    });

    const index = new sls.Index(this, 'myIndex', {
      projectName: projectName.valueAsString,
      logReduce: logReduce.valueAsBoolean,
      logstoreName: logstoreName.valueAsString,
      keyIndices: keyIndices.valueAsAny,
      fullTextIndex: fullTextIndex.valueAsAny,
    });
  }
}

export class IndexPropTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const fullTextIndex: sls.IndexProperty.FullTextIndexProperty = {
      enable: false,
      caseSensitive: true,
      includeChinese: true,
    };
    const jsonKeyIndices: sls.IndexProperty.JsonKeyIndicesProperty = {
      type: 'long',
      name: 'jsonkeyname',
    };

    const keyIndices: sls.IndexProperty.KeyIndicesProperty = {
      jsonKeyIndices: [jsonKeyIndices],
      type: 'long',
      name: 'keyindices',
    };

    const index = new sls.Index(this, 'myIndex', {
      projectName: 'testindex',
      logReduce: false,
      logstoreName: 'logstorename',
      keyIndices: [keyIndices],
      fullTextIndex: fullTextIndex,
    });
  }
}

// simulate the template deploy scenario
export class IndexPropDeployTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const project = new sls.Project(this, 'Project', {
      name: 'ros-test-project1',
      description: 'ros-describe',
    });

    const logstore = new sls.Logstore(this, 'Logstore', {
      logstoreName: 'ros-logs-tore-name1',
      projectName: project.attrName,
    });

    const fullTextIndex: sls.IndexProperty.FullTextIndexProperty = {
      enable: true,
      caseSensitive: true,
      includeChinese: true,
      delimiter: ',',
    };

    const textKeyIndices: sls.IndexProperty.KeyIndicesProperty = {
      type: 'text',
      name: 'k1,k3',
      enableAnalytics: true,
      delimiter: ',',
      caseSensitive: true,
      alias: 'ros1',
      includeChinese: true,
    };

    const jsonKeyIndice1: sls.IndexProperty.JsonKeyIndicesProperty = {
      type: 'text',
      alias: 'ros-alias',
      enableAnalytics: true,
      name: 'JsonKeyIndices1',
    };

    const jsonKeyIndice2: sls.IndexProperty.JsonKeyIndicesProperty = {
      type: 'long',
      alias: 'ros-alias',
      enableAnalytics: false,
      name: 'JsonKeyIndices2',
    };

    const jsonKeyIndices: sls.IndexProperty.KeyIndicesProperty = {
      name: 'k2',
      enableAnalytics: true,
      delimiter: ',',
      caseSensitive: true,
      jsonKeyIndices: [jsonKeyIndice1, jsonKeyIndice2],
      alias: 'ros-extension2',
      includeChinese: true,
      type: 'json',
    };

    const index = new sls.Index(this, 'Index', {
      logstoreName: logstore.attrLogstoreName,
      projectName: project.attrName,
      logReduce: true,
      fullTextIndex: fullTextIndex,
      keyIndices: [textKeyIndices, jsonKeyIndices],
    });
    index.addDependency(project);
    index.addDependency(logstore);

    const logstoreNameOutput = new ros.RosOutput(this, 'LogstoreName', {
      description: 'Logstore name.',
      value: logstore.attrLogstoreName,
    });

    const nameOutput = new ros.RosOutput(this, 'Name', {
      description: 'Project name.',
      value: project.attrName,
    });
  }
}
