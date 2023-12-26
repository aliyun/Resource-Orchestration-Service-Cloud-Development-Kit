using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datahub
{
    /// <summary>Properties for defining a `Project`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-project
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.ProjectProps")]
    public interface IProjectProps
    {
        /// <summary>Property comment: The comment of project.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Comment
        {
            get;
        }

        /// <summary>Property projectName: The name of the project.</summary>
        /// <remarks>
        /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Properties for defining a `Project`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datahub-project
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-datahub.ProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Datahub.IProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property comment: The comment of project.</summary>
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Comment
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectName: The name of the project.</summary>
            /// <remarks>
            /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
