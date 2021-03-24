using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datahub
{
    /// <summary>Properties for defining a `ALIYUN::DATAHUB::Project`.</summary>
    [JsiiInterface(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.ProjectProps")]
    public interface IProjectProps
    {
        /// <summary>Property comment: The comment of project.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}")]
        string Comment
        {
            get;
        }

        /// <summary>Property projectName: The name of the project.</summary>
        /// <remarks>
        /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}")]
        string ProjectName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::DATAHUB::Project`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.ProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Datahub.IProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property comment: The comment of project.</summary>
            [JsiiProperty(name: "comment", typeJson: "{\"primitive\":\"string\"}")]
            public string Comment
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property projectName: The name of the project.</summary>
            /// <remarks>
            /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"primitive\":\"string\"}")]
            public string ProjectName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
