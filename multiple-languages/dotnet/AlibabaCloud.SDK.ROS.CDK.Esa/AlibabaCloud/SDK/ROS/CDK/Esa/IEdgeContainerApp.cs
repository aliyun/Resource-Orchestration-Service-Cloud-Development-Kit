using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `EdgeContainerApp`.</summary>
    [JsiiInterface(nativeType: typeof(IEdgeContainerApp), fullyQualifiedName: "@alicloud/ros-cdk-esa.IEdgeContainerApp")]
    public interface IEdgeContainerApp : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AppStatus: The status of the application.</summary>
        [JsiiProperty(name: "attrAppStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppStatus
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the application was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DomainName: The domain name that is associated with the application.</summary>
        /// <remarks>
        /// If no domain name is associated with the application, the value is an empty string.
        /// </remarks>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainName
        {
            get;
        }

        /// <summary>Attribute EdgeContainerAppName: The name of the application.</summary>
        [JsiiProperty(name: "attrEdgeContainerAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEdgeContainerAppName
        {
            get;
        }

        /// <summary>Attribute GatewayType: The type of the gateway.</summary>
        [JsiiProperty(name: "attrGatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGatewayType
        {
            get;
        }

        /// <summary>Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.</summary>
        [JsiiProperty(name: "attrHealthCheckFailTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckFailTimes
        {
            get;
        }

        /// <summary>Attribute HealthCheckHost: The domain name that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckHost
        {
            get;
        }

        /// <summary>Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.</summary>
        [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckHttpCode
        {
            get;
        }

        /// <summary>Attribute HealthCheckInterval: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckInterval
        {
            get;
        }

        /// <summary>Attribute HealthCheckMethod: The HTTP request method for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckMethod
        {
            get;
        }

        /// <summary>Attribute HealthCheckPort: The port used for health checks.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535. Default value: 80.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckPort
        {
            get;
        }

        /// <summary>Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.</summary>
        [JsiiProperty(name: "attrHealthCheckSuccTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckSuccTimes
        {
            get;
        }

        /// <summary>Attribute HealthCheckTimeout: The timeout period of a health check response.</summary>
        [JsiiProperty(name: "attrHealthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckTimeout
        {
            get;
        }

        /// <summary>Attribute HealthCheckType: The health check type.</summary>
        [JsiiProperty(name: "attrHealthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckType
        {
            get;
        }

        /// <summary>Attribute HealthCheckUri: The URI used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckUri
        {
            get;
        }

        /// <summary>Attribute QuicCid: Indicates whether QUIC is enabled.</summary>
        [JsiiProperty(name: "attrQuicCid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQuicCid
        {
            get;
        }

        /// <summary>Attribute Remarks: The remarks.</summary>
        /// <remarks>
        /// This parameter is empty by default.
        /// </remarks>
        [JsiiProperty(name: "attrRemarks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemarks
        {
            get;
        }

        /// <summary>Attribute ServicePort: The server port.</summary>
        [JsiiProperty(name: "attrServicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServicePort
        {
            get;
        }

        /// <summary>Attribute TargetPort: The backend port, which is also the service port of the application.</summary>
        [JsiiProperty(name: "attrTargetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetPort
        {
            get;
        }

        /// <summary>Attribute UpdateTime: The time when the application was last modified.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        /// <summary>Attribute VersionCount: The number of versions of the application.</summary>
        [JsiiProperty(name: "attrVersionCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersionCount
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.EdgeContainerAppProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerAppProps Props
        {
            get;
        }

        /// <summary>Represents a `EdgeContainerApp`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEdgeContainerApp), fullyQualifiedName: "@alicloud/ros-cdk-esa.IEdgeContainerApp")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerApp
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AppStatus: The status of the application.</summary>
            [JsiiProperty(name: "attrAppStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the application was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainName: The domain name that is associated with the application.</summary>
            /// <remarks>
            /// If no domain name is associated with the application, the value is an empty string.
            /// </remarks>
            [JsiiProperty(name: "attrDomainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EdgeContainerAppName: The name of the application.</summary>
            [JsiiProperty(name: "attrEdgeContainerAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEdgeContainerAppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GatewayType: The type of the gateway.</summary>
            [JsiiProperty(name: "attrGatewayType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGatewayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.</summary>
            [JsiiProperty(name: "attrHealthCheckFailTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckFailTimes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckHost: The domain name that is used for health checks.</summary>
            [JsiiProperty(name: "attrHealthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckHost
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.</summary>
            [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckHttpCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckInterval: The interval between two consecutive health checks.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckInterval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckMethod: The HTTP request method for health checks.</summary>
            [JsiiProperty(name: "attrHealthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckMethod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckPort: The port used for health checks.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535. Default value: 80.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.</summary>
            [JsiiProperty(name: "attrHealthCheckSuccTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckSuccTimes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckTimeout: The timeout period of a health check response.</summary>
            [JsiiProperty(name: "attrHealthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckType: The health check type.</summary>
            [JsiiProperty(name: "attrHealthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckUri: The URI used for health checks.</summary>
            [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QuicCid: Indicates whether QUIC is enabled.</summary>
            [JsiiProperty(name: "attrQuicCid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQuicCid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Remarks: The remarks.</summary>
            /// <remarks>
            /// This parameter is empty by default.
            /// </remarks>
            [JsiiProperty(name: "attrRemarks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemarks
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServicePort: The server port.</summary>
            [JsiiProperty(name: "attrServicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServicePort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetPort: The backend port, which is also the service port of the application.</summary>
            [JsiiProperty(name: "attrTargetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: The time when the application was last modified.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VersionCount: The number of versions of the application.</summary>
            [JsiiProperty(name: "attrVersionCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersionCount
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.EdgeContainerAppProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerAppProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerAppProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
