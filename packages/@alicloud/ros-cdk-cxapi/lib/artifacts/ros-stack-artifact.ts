import * as cxschema from "@alicloud/ros-cdk-assembly-schema";
import * as fs from "fs";
import * as path from "path";
import { CloudArtifact } from "../cloud-artifact";
import { CloudAssembly } from "../cloud-assembly";

export class RosStackArtifact extends CloudArtifact {
  /**
   * The file name of the template.
   */
  public readonly templateFile: string;

  /**
   * The original name as defined in the CDK app.
   */
  public readonly originalName: string;

  /**
   * ROS parameters to pass to the stack.
   */
  public readonly parameters: { [id: string]: string };

  /**
   * The physical name of this stack.
   */
  public readonly stackName: string;

  /**
   * A string that represents this stack. Should only be used in user interfaces.
   * If the stackName and artifactId are the same, it will just return that. Otherwise,
   * it will return something like "<artifactId> (<stackName>)"
   */
  public readonly displayName: string;

  /**
   * The physical name of this stack.
   * @deprecated renamed to `stackName`
   */
  public readonly name: string;

  public readonly tags: any;

  private _template: any | undefined;

  constructor(
      assembly: CloudAssembly,
      artifactId: string,
      artifact: cxschema.ArtifactManifest
  ) {
    super(assembly, artifactId, artifact);

    const properties = (this.manifest.properties ||
        {}) as cxschema.AliyunRosStackProperties;
    if (!properties.templateFile) {
      throw new Error(
          'Invalid ROS stack artifact. Missing "templateFile" property in cloud assembly manifest'
      );
    }

    this.templateFile = properties.templateFile;
    this.parameters = properties.parameters || {};
    this.stackName = properties.stackName || artifactId;
    this.displayName =
        this.stackName === artifactId
            ? this.stackName
            : `${artifactId} (${this.stackName})`;
    this.name = this.stackName; // backwards compat
    this.originalName = this.stackName;
    this.tags = properties.tags ?? this.tagsFromMetadata();
  }

  /**
   * The ROS template for this stack.
   */
  public get template(): any {
    if (this._template === undefined) {
      this._template = JSON.parse(
          fs.readFileSync(
              path.join(this.assembly.directory, this.templateFile),
              "utf-8"
          )
      );
    }
    return this._template;
  }

  private tagsFromMetadata() {
    const ret: Record<string, string> = {};
    for (const metadataEntry of this.findMetadataByType(cxschema.ArtifactMetadataEntryType.STACK_TAGS)) {
      for (const tag of (metadataEntry.data ?? []) as cxschema.StackTagsMetadataEntry) {
        ret[tag.key] = tag.value;
      }
    }
    return ret;
  }
}
