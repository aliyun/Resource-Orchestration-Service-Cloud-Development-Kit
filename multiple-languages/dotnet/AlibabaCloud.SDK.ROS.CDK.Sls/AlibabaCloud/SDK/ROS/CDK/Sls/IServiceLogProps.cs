using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ServiceLog`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServiceLogProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.ServiceLogProps")]
    public interface IServiceLogProps
    {
        /// <summary>Property logStorageLocation: The location of the service log.</summary>
        [JsiiProperty(name: "logStorageLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogStorageLocation
        {
            get;
        }

        /// <summary>Property projectName: The name of the project that needs to be activated.</summary>
        /// <remarks>
        /// If it has been activated, it will be reactivated again.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property serviceLogTypes: Types of service log that needs to be activated.</summary>
        [JsiiProperty(name: "serviceLogTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ServiceLogTypes
        {
            get;
        }

        /// <summary>Properties for defining a `ServiceLog`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServiceLogProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.ServiceLogProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IServiceLogProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property logStorageLocation: The location of the service log.</summary>
            [JsiiProperty(name: "logStorageLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogStorageLocation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectName: The name of the project that needs to be activated.</summary>
            /// <remarks>
            /// If it has been activated, it will be reactivated again.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceLogTypes: Types of service log that needs to be activated.</summary>
            [JsiiProperty(name: "serviceLogTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServiceLogTypes
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
