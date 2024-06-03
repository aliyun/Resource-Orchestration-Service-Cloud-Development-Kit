using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nls
{
    /// <summary>Properties for defining a `Project`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-nls.ProjectProps")]
    public interface IProjectProps
    {
        /// <summary>Property name: Name of the project.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property projectType: Type of the project.</summary>
        [JsiiProperty(name: "projectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectType
        {
            get;
        }

        /// <summary>Property description: Description of the project.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sdkType: Type of the SDK.</summary>
        [JsiiProperty(name: "sdkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SdkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Project`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-nls.ProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nls.IProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: Name of the project.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectType: Type of the project.</summary>
            [JsiiProperty(name: "projectType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Description of the project.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sdkType: Type of the SDK.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sdkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SdkType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
