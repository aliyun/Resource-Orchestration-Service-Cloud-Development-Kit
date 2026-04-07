using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `RosExternalDataService`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-externaldataservice
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosExternalDataServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosExternalDataServiceProps")]
    public interface IRosExternalDataServiceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service Name.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceSpec: Service Specifications.
        /// </remarks>
        [JsiiProperty(name: "serviceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceSpec
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceDescription: Service Description.
        /// </remarks>
        [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosExternalDataService`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-externaldataservice
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosExternalDataServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosExternalDataServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IRosExternalDataServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: Instance ID.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Service Name.
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceSpec: Service Specifications.
            /// </remarks>
            [JsiiProperty(name: "serviceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceDescription: Service Description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
