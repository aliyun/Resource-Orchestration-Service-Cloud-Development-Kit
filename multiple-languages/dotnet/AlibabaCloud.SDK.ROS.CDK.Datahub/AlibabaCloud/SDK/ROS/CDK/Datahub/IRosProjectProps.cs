using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datahub
{
    /// <summary>Properties for defining a `ALIYUN::DATAHUB::Project`.</summary>
    [JsiiInterface(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.RosProjectProps")]
    public interface IRosProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: comment: The comment of project.
        /// </remarks>
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}")]
        string Comment
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}")]
        string ProjectName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::DATAHUB::Project`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.RosProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Datahub.IRosProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: comment: The comment of project.
            /// </remarks>
            [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}")]
            public string Comment
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}")]
            public string ProjectName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
