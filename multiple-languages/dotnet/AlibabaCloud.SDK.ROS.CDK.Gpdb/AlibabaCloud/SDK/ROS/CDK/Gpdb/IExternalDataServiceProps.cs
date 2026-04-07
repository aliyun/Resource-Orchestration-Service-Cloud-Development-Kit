using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `ExternalDataService`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-externaldataservice
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IExternalDataServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.ExternalDataServiceProps")]
    public interface IExternalDataServiceProps
    {
        /// <summary>Property dbInstanceId: Instance ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property serviceName: Service Name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Property serviceSpec: Service Specifications.</summary>
        [JsiiProperty(name: "serviceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceSpec
        {
            get;
        }

        /// <summary>Property serviceDescription: Service Description.</summary>
        [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ExternalDataService`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-externaldataservice
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IExternalDataServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.ExternalDataServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IExternalDataServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: Instance ID.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceName: Service Name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceSpec: Service Specifications.</summary>
            [JsiiProperty(name: "serviceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceDescription: Service Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
