using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `RosServiceLog`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosServiceLogProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosServiceLogProps")]
    public interface IRosServiceLogProps
    {
        /// <remarks>
        /// <strong>Property</strong>: logStorageLocation: The location of the service log.
        /// </remarks>
        [JsiiProperty(name: "logStorageLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogStorageLocation
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceLogTypes: Types of service log that needs to be activated.
        /// </remarks>
        [JsiiProperty(name: "serviceLogTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ServiceLogTypes
        {
            get;
        }

        /// <summary>Properties for defining a `RosServiceLog`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosServiceLogProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosServiceLogProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosServiceLogProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: logStorageLocation: The location of the service log.
            /// </remarks>
            [JsiiProperty(name: "logStorageLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogStorageLocation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceLogTypes: Types of service log that needs to be activated.
            /// </remarks>
            [JsiiProperty(name: "serviceLogTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServiceLogTypes
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
