const rosClient = require('@alicloud/ros-2019-09-10');
import * as fs from 'fs';
import * as path from 'path';

// client init

function initClient(endpoint: string, accessKeyId: string, accessKeySecret: string) {
    let client = new rosClient({
        endpoint: endpoint ? endpoint : 'https://ros.aliyuncs.com',
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
    });
    return client
}


function getPropertyTypeName(type: string, propertyName: string, path: Array<string>, propertyTypes: any): string {
    let shortName = propertyName;
    let fullName = `${type}.${shortName}`;
    if (!(fullName in propertyTypes)) {
        return shortName;
    }
    let path2 = [...path];
    path2.reverse();
    let middle = '';
    for (const token of path2) {
        middle = token + middle;
        shortName = `${middle}${propertyName}`
        fullName = `${type}.${shortName}`;
        if (!(fullName in propertyTypes)) {
            return shortName;
        }
    }
    let i = 1;
    while (true) {
        let shortName2 = `${shortName}${i}`
        fullName = `${type}.${shortName2}`;
        if (!(fullName in propertyTypes)) {
            return shortName2;
        }
        i++;
    }
}


export function specGenerator() {
    let spec: any = {};
    // ALIYUN开头的资源集合
    let onlyResourceTypes: Set<string> = new Set();
    // ALIYUN与DATASOURCE开头的资源集合
    let fullResourceTypes: Set<string> = new Set();
    let codeMappingTypesArray = new Array();
    let resourceTypes: any = {};
    let propertyTypes: any = {};
    let codeMappingFile = fs.readFileSync(path.join(__dirname, '/../../@alicloud/ros-cdk-spec/spec/code_mapping.json')).toString();
    let codeMappingFileContent = JSON.parse(codeMappingFile);
    let specificationOriginFile = fs.readFileSync(path.join(__dirname, '/../../@alicloud/ros-cdk-spec/spec/specification_origin.json')).toString();
    let specificationOriginFileContent = JSON.parse(specificationOriginFile);
    for (let [type] of Object.entries(specificationOriginFileContent['ResourceTypes'])) {
        let category: string[] = type.split('::');
        // e.g. ALIYUN::ECS::VPC
        if (category[0].startsWith('ALIYUN')) {
            onlyResourceTypes.add(category[0] + '::' + category[1]);
        }
        fullResourceTypes.add(category[0] + '::' + category[1]);
        let typeDetail = specificationOriginFileContent['ResourceTypes'][type];

        // handle properties
        // string, integer, number, boolean -> PrimitiveType
        // list, map -> Type + PrimitiveType / ItemType
        // move 'schema' to propertyTypes
        let queue: { [key: string]: any } = {};

        queue[type] = [typeDetail.Properties, []];
        while (Object.keys(queue).length > 0) {
            let queueNext: { [key: string]: any } = {};
            let resourceNames = Object.keys(queue);
            resourceNames.sort()
            for (let resourceName of resourceNames) {
                let properties = queue[resourceName][0];
                let path = queue[resourceName][1];
                if (properties === null || properties === undefined) continue;
                let propertyNames = Object.keys(properties);
                propertyNames.sort()
                for (let propertyName of propertyNames) {
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
                                if (Schema['*']['Schema']) {
                                    Property.ItemType = getPropertyTypeName(type, propertyName, path, propertyTypes);
                                    let subTypeName = `${type}.${Property.ItemType}`
                                    Schema = Schema['*']['Schema'];
                                    queueNext[subTypeName] = [Schema, [...path, propertyName]];
                                    propertyTypes[subTypeName] = {
                                        Properties: Schema,
                                    };
                                } else if (Schema['*']['Type'] === 'map') {
                                    Property.PrimitiveItemType = 'AnyDict';
                                } else {
                                    Property.PrimitiveItemType = initialToUpperCase(Schema['*']['Type']);
                                }
                            } else {
                                Property.PrimitiveItemType = 'Any';
                            }
                            break;
                        case 'map':
                            if (Schema) {
                                Property.Type = getPropertyTypeName(type, propertyName, path, propertyTypes);
                                let subTypeName = `${type}.${Property.Type}`;
                                queueNext[subTypeName] = [Schema, [...path, propertyName]];
                                propertyTypes[subTypeName] = {
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

        resourceTypes[`${type}`] = {
            Description: typeDetail.Description ? typeDetail.Description : '',
            Documentation: typeDetail.Documentation ? typeDetail.Documentation : '',
            Attributes: typeDetail.Attributes ? typeDetail.Attributes : {},
            Properties: typeDetail.Properties ? typeDetail.Properties : {},
            PropsToRosName: typeDetail.PropsToRosName ? typeDetail.PropsToRosName : {},
        };
    }
    for (let [rosCode] of Object.entries(codeMappingFileContent['CodeMapping'])) {
        codeMappingTypesArray.push('ALIYUN::' + rosCode)
    }
    let onlyTypesArray = Array.from(onlyResourceTypes)
    let fullTypesArray = Array.from(fullResourceTypes)
    let diffArr = getArrDifference(onlyTypesArray, codeMappingTypesArray)
    if(diffArr != null && diffArr != ""){
        throw new Error(`code_mapping file diff with types file "${diffArr}", please add information with code_mapping file.`);
    }
    fs.writeFileSync(path.join(__dirname, '/../../@alicloud/ros-cdk-spec/spec/types.json'), JSON.stringify(fullTypesArray, null, '\t'));
    spec['PropertyTypes'] = propertyTypes;
    spec['ResourceTypes'] = resourceTypes;

    fs.writeFileSync(path.join(__dirname, '/../../@alicloud/ros-cdk-spec/spec/specification.json'), JSON.stringify(spec, null, '\t'));
}

export async function specOriginGenerator(endpoint: string, accessKeyId: string, accessKeySecret: string) {
    let spec: any = {};
    let resourceTypes: any = {};
    let client = initClient(endpoint, accessKeyId, accessKeySecret)
    let allResourceTypes = await client.listResourceTypes({EntityType: 'All'})
    for (let type of allResourceTypes.ResourceTypes) {
        // e.g. ALIYUN::ECS::VPC & DATASOURCE::VPC::FlowLogs
        if (type.startsWith('DATASOURCE') || type.startsWith('ALIYUN')) {
            let typeDetail = await client.getResourceType({ResourceType: type});

            let properties = typeDetail.Properties ? typeDetail.Properties : {};
            let propsToRosName: { [key: string]: string } = {};
            if ('Id' in properties) {
                const value = properties['Id'];
                delete properties['Id'];
                properties['Identity'] = value;
                propsToRosName['Identity'] = 'Id';
            }

            resourceTypes[`${typeDetail.ResourceType}`] = {
                Description: typeDetail.Description ? typeDetail.Description : '',
                Documentation: `https://www.alibabacloud.com/help/ros/developer-reference/${type.toLowerCase().replace(/::/g, '-')}`,
                Attributes: typeDetail.Attributes ? typeDetail.Attributes : {},
                Properties: properties,
                PropsToRosName: propsToRosName,
            };
            await sleep(600);
        }
    }
    spec['ResourceTypes'] = resourceTypes;
    fs.writeFileSync(path.join(__dirname, '/../../@alicloud/ros-cdk-spec/spec/specification_origin.json'), JSON.stringify(spec, null, '\t'));
}

const sleep = function (ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

function initialToUpperCase(str: string): string {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function getArrDifference(arr1: any, arr2: any) {
    let newArr = [];
    let arr3 = arr1.concat(arr2);
    function isContain(value: any) {
        return arr1.indexOf(value) == -1 || arr2.indexOf(value) == -1;
    }
    newArr = arr3.filter(isContain);
    return newArr;
}
