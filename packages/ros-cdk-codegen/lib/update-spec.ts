const rosClient = require('@alicloud/ros-2019-09-10');
import * as readlineSync from 'readline-sync';
import * as fs from 'fs';
import * as path from 'path';
export function specGenerator() {
  // client init
  let endpoint = readlineSync.question('endpoint(optional, default:https://ros.aliyuncs.com):');
  let accessKeyId = readlineSync.question('accessKeyId:', {hideEchoBack: true});
  let accessKeySecret = readlineSync.question('accessKeySecret:', {hideEchoBack: true});
  const client = new rosClient({
    endpoint: endpoint ? endpoint : 'https://ros.aliyuncs.com',
    accessKeyId: accessKeyId,
    accessKeySecret: accessKeySecret,
  });

  // get all resources type
  let spec: any = {};
  let allTypes: Set<string> = new Set();
  let resourceTypes: any = {};
  let propertyTypes: any = {};
  client
    .listResourceTypes()
    .then(async (res: any) => {
      // test
      for (let type of res.ResourceTypes) {
        let category: string[] = type.split('::');
        allTypes.add(category[0] + '::' + category[1]);

        // e.g. ALIYUN::ECS::VPC
        let typeDetail = await client.getResourceType({ ResourceType: type });

        // handle properties
        // string, integer, number, boolean -> PrimitiveType
        // list, map -> Type + PrimitiveType / ItemType
        // move 'schema' to propertyTypes
        let queue: { [key: string]: any } = {};

        queue[typeDetail.ResourceType] = typeDetail.Properties;
        while (Object.keys(queue).length > 0) {
          let queueNext: { [key: string]: any } = {};
          for (let resourceName of Object.keys(queue)) {
            let properties = queue[resourceName];
            if (properties === null || properties === undefined) continue;
            for (let propertyName of Object.keys(properties)) {
              let Property = properties[propertyName];

              // replace all property including "." with ""
              let newPropertyName = propertyName.replace(new RegExp('\\.', 'gm'), '');
              if (newPropertyName !== propertyName) {
                properties[newPropertyName] = Property;
                delete properties[propertyName];
                propertyName = newPropertyName;
              }

              let propertyType = Property.Type;
              let Schema = Property.Schema;
              delete Property.Schema;
              delete Property.Type;
              switch (propertyType) {
                case 'string':
                case 'integer':
                case 'number':
                case 'boolean':
                  Property.PrimitiveType = initialToUpperCase(propertyType);
                  break;
                case 'list':
                  Property.Type = 'List';
                  if (Schema) {
                    if (propertyName === 'Tags') {
                      Property.ItemType = 'Tag';
                      continue;
                    }
                    if (Schema['*']['Schema']) {
                      Property.ItemType = propertyName;
                      queueNext[`${type}.${propertyName}`] = Schema['*']['Schema'];
                      Schema = Schema['*']['Schema'];
                      propertyTypes[`${type}.${propertyName}`] = {
                        Properties: Schema,
                      };
                    } else if (Schema['*']['Type'] === 'map') {
                      Property.PrimitiveItemType = 'Any';
                    } else {
                      Property.PrimitiveItemType = initialToUpperCase(
                        Schema['*']['Type'] === 'integer' ? 'number' : Schema['*']['Type'],
                      );
                    }
                  } else {
                    Property.PrimitiveItemType = 'Any';
                  }
                  break;
                case 'map':
                  if (propertyName === 'Tags') {
                    Property.ItemType = 'Tag';
                    Property.Type = 'List';
                    continue;
                  }
                  if (Schema) {
                    Property.Type = propertyName;
                    queueNext[`${type}.${propertyName}`] = Schema;
                    propertyTypes[`${type}.${propertyName}`] = {
                      Properties: Schema,
                    };
                  } else {
                    Property.Type = 'Map';
                    // target: {[key: string]: any}
                    // now: {[key: string]: string}
                    // Property.PrimitiveType = initialToUpperCase('any');
                    Property.PrimitiveItemType = 'Any';
                  }
                  break;
              }
            }
          }
          queue = queueNext;
        }

        resourceTypes[`${typeDetail.ResourceType}`] = {
          Attributes: typeDetail.Attributes ? typeDetail.Attributes : {},
          Properties: typeDetail.Properties ? typeDetail.Properties : {},
        };
        await sleep(600);
      }
    })
    .then(() => {
      fs.writeFileSync(path.join(__dirname, '/../../@alicloud/ros-cdk-spec/spec/types.json'), JSON.stringify(Array.from(allTypes), null, '\t'));
      spec['PropertyTypes'] = propertyTypes;
      spec['ResourceTypes'] = resourceTypes;

      fs.writeFileSync(path.join(__dirname, '/../../@alicloud/ros-cdk-spec/spec/specification.json'), JSON.stringify(spec, null, '\t'));
    });
}

const sleep = function (ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

function initialToUpperCase(str: string): string {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}
