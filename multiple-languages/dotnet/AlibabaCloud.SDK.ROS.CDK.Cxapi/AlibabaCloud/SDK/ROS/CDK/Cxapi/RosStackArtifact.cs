using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cxapi.RosStackArtifact), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.RosStackArtifact", parametersJson: "[{\"name\":\"assembly\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}},{\"name\":\"artifactId\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"artifact\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"}}]")]
    public class RosStackArtifact : AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudArtifact
    {
        public RosStackArtifact(AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly assembly, string artifactId, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest artifact): base(new DeputyProps(new object?[]{assembly, artifactId, artifact}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosStackArtifact(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosStackArtifact(DeputyProps props): base(props)
        {
        }

        /// <summary>A string that represents this stack.</summary>
        /// <remarks>
        /// Should only be used in user interfaces.
        /// If the stackName and artifactId are the same, it will just return that. Otherwise,
        /// it will return something like "<artifactId xmlns="http://www.w3.org/1999/xhtml"></artifactId> (<stackName xmlns="http://www.w3.org/1999/xhtml"></stackName>)"
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DisplayName
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>(deprecated) The physical name of this stack.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        [System.Obsolete("renamed to `stackName`")]
        public virtual string Name
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The original name as defined in the CDK app.</summary>
        [JsiiProperty(name: "originalName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string OriginalName
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>ROS parameters to pass to the stack.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}")]
        public virtual System.Collections.Generic.IDictionary<string, string> Parameters
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>>()!;
        }

        /// <summary>The physical name of this stack.</summary>
        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string StackName
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The ROS template for this stack.</summary>
        [JsiiProperty(name: "template", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object Template
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>The file name of the template.</summary>
        [JsiiProperty(name: "templateFile", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string TemplateFile
        {
            get => GetInstanceProperty<string>()!;
        }
    }
}
