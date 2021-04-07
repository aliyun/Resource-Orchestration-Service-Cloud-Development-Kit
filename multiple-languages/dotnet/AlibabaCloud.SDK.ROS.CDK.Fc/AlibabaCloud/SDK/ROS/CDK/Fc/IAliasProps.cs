using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::Alias`.</summary>
    [JsiiInterface(nativeType: typeof(IAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.AliasProps")]
    public interface IAliasProps
    {
        /// <summary>Property aliasName: Alias name.</summary>
        [JsiiProperty(name: "aliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AliasName
        {
            get;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Property additionalVersion: Additional version.</summary>
        [JsiiProperty(name: "additionalVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AdditionalVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property additionalWeight: Traffic weight of additional version.</summary>
        /// <remarks>
        /// From 0 to 100.
        /// </remarks>
        [JsiiProperty(name: "additionalWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AdditionalWeight
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Version description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property versionId: Version ID.</summary>
        [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FC::Alias`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.AliasProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IAliasProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aliasName: Alias name.</summary>
            [JsiiProperty(name: "aliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AliasName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property additionalVersion: Additional version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "additionalVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AdditionalVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property additionalWeight: Traffic weight of additional version.</summary>
            /// <remarks>
            /// From 0 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalWeight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AdditionalWeight
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Version description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property versionId: Version ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VersionId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
