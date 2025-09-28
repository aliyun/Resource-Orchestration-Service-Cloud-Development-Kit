using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `DeployRevision`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-deployrevision
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDeployRevisionProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.DeployRevisionProps")]
    public interface IDeployRevisionProps
    {
        /// <summary>Property applicationName: The name of the application.</summary>
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApplicationName
        {
            get;
        }

        /// <summary>Property description: The description of the revision.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hooks: The hook of the code to be deployed.</summary>
        [JsiiProperty(name: "hooks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Hooks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property location: The location of the code to be deployed.</summary>
        [JsiiProperty(name: "location", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Location
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property revisionType: The type of the revision.</summary>
        [JsiiProperty(name: "revisionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RevisionType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DeployRevision`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-deployrevision
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDeployRevisionProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.DeployRevisionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IDeployRevisionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property applicationName: The name of the application.</summary>
            [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApplicationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the revision.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hooks: The hook of the code to be deployed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hooks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Hooks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property location: The location of the code to be deployed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "location", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Location
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property revisionType: The type of the revision.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "revisionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RevisionType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
