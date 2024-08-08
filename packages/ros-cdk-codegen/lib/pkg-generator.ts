import { tryReadPackageJson } from '../lib/util';
import { allTypes } from '@alicloud/ros-cdk-spec';
import * as fs from 'fs-extra';

const ROS_CDK_SCOPE = '@alicloud/';
const ROS_JAVA_PACKAGE = 'com.aliyun.';
const ROS_DOTNAT_PACKAGE = 'AlibabaCloud.SDK.ROS.CDK.';
const ROS_GO_PACKAGE = 'github.com/alibabacloud-go/ros-cdk/';
export async function createPackages() {

    // mkdir in the pkg root
    const outdir = __dirname + '/../generatedPackages';
    fs.mkdirpSync(outdir);

    const scopes = await tryReadPackageJson(allTypes());
    for(let index in scopes) {
        let service = scopes[index].split('::')[1].toLowerCase();
        if (service == 'eip' || service == 'eipanycast') {
            // 由于DATASOURCE::EIP::Addresses这个原本属于VPC资源的存在
            continue
        }
        let scope = 'ros-cdk-' + service;
        let pkgPath = outdir + '/' + scope;
        let template_dir = __dirname + '/pkg-template';
        fs.mkdirpSync(pkgPath);
        fs.mkdirpSync(pkgPath + '/lib');
        let pkg = fs.readJSONSync(template_dir + '/package.json');
        pkg['name'] = ROS_CDK_SCOPE + scope;
        pkg['description'] = pkg['description'].replace('replace-content', scope);

        // jsii -> java
        pkg['jsii']['targets']['java']['package'] = ROS_JAVA_PACKAGE + scope.split('-').join('.');
        pkg['jsii']['targets']['java']['maven']['artifactId'] = scope;

        // jsii -> python
        pkg['jsii']['targets']['python']['module'] = scope.split('-').join('_')
        pkg['jsii']['targets']['python']['distName'] = scope

        // jsii -> dotnet
        pkg['jsii']['targets']['dotnet']['namespace'] = ROS_DOTNAT_PACKAGE + service.toLowerCase().replace(/( |^)[a-z]/g, (L: string) => L.toUpperCase());
        pkg['jsii']['targets']['dotnet']['packageId'] = ROS_DOTNAT_PACKAGE + service.toLowerCase().replace(/( |^)[a-z]/g, (L: string) => L.toUpperCase());

        // jsii -> go
        pkg['jsii']['targets']['go']['module'] = ROS_GO_PACKAGE + service;

        fs.writeFileSync(pkgPath + '/package.json', JSON.stringify(pkg, null, 2), 'utf-8');


        // copy README.md and gitignore
        let readme = fs.readFileSync(template_dir + '/README.md');
        fs.writeFileSync(pkgPath + '/README.md', readme.toString().replace(
            /service-name/g, service.toUpperCase()).replace(/scope-name/g, scope));
        fs.copySync(template_dir + '/gitignore-template', pkgPath + '/.gitignore');
        fs.copySync(template_dir + '/LICENCE', pkgPath + '/LICENCE');
        fs.copySync(template_dir + '/NOTICE', pkgPath + '/NOTICE');
    }



}
createPackages();
