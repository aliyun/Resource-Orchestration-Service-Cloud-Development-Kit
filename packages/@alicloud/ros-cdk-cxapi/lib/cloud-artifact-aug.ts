import { AssetManifestArtifact } from './artifacts/asset-manifest-artifact';
import { RosStackArtifact } from './artifacts/ros-stack-artifact';
import { NestedCloudAssemblyArtifact } from './artifacts/nested-cloud-assembly-artifact';
import { TreeCloudArtifact } from './artifacts/tree-cloud-artifact';
import { CloudArtifact } from './cloud-artifact';
import { CloudAssembly } from './cloud-assembly';
import * as cxschema from '@alicloud/ros-cdk-assembly-schema';

/**
 * Add the 'fromManifest' factory function
 *
 * It is defined in a separate file to avoid circular dependencies between 'cloud-artifact.ts'
 * and all of its subclass files.
 */
CloudArtifact.fromManifest = function fromManifest(
  assembly: CloudAssembly,
  id: string,
  artifact: cxschema.ArtifactManifest,
): CloudArtifact | undefined {
  switch (artifact.type) {
    case cxschema.ArtifactType.ALIYUN_ROS_STACK:
      return new RosStackArtifact(assembly, id, artifact);
    case cxschema.ArtifactType.CDK_TREE:
      return new TreeCloudArtifact(assembly, id, artifact);
    case cxschema.ArtifactType.ASSET_MANIFEST:
      return new AssetManifestArtifact(assembly, id, artifact);
    case cxschema.ArtifactType.NESTED_CLOUD_ASSEMBLY:
      return new NestedCloudAssemblyArtifact(assembly, id, artifact);
    default:
      return undefined;
  }
};