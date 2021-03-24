using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gws
{
    /// <summary>A ROS template type:  `ALIYUN::GWS::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Gws.RosInstance), fullyQualifiedName: "@alicloud/ros-cdk-gws.RosInstance", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-gws.RosInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosInstance : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::GWS::Instance`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Gws.IRosInstanceProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Gws.RosInstance))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterId: Cluster id
        /// </remarks>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceChargeType: Instance charge type
        /// </remarks>
        [JsiiProperty(name: "attrInstanceChargeType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceId: Instance id
        /// </remarks>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: MaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps)
        /// </remarks>
        [JsiiProperty(name: "attrMaxBandwidthIn", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMaxBandwidthIn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: MaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps)
        /// </remarks>
        [JsiiProperty(name: "attrMaxBandwidthOut", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMaxBandwidthOut
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Name: Instance name
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster id
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ClusterId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Mirror id
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ImageId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string InstanceType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
        /// </remarks>
        [JsiiProperty(name: "systemDiskCategory", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string SystemDiskCategory
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskSize: System disk size
        /// </remarks>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double SystemDiskSize
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: workMode: Work mode:
        /// Desktop
        /// Application
        /// </remarks>
        [JsiiProperty(name: "workMode", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string WorkMode
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: allocatePublicAddress: Whether to allocate a public network address
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allocatePublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AllocatePublicAddress
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: appList: App list. This value is only valid when WorkMode is Application.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gws.RosInstance.AppListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? AppList
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Whether auto renew
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoRenew
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceChargeType: Instance charge type:
        /// PostPaid (default): Pay-As-You-Go
        /// PrePaid: Subscription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InstanceChargeType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Network charge type:
        /// PayByTraffic (default): Flow-per-use billing
        /// PayByBandwidth: fixed-bandwidth billing
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InternetChargeType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
        /// Value range: 1-200
        /// Default: 200
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthIn", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? InternetMaxBandwidthIn
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
        /// Value range: 1-200
        /// Default: 200
        /// This value is only valid when AllocatePublicAddress is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? InternetMaxBandwidthOut
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Instance name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Name
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Period of subscription.
        /// When PeriodUnit is Week, the value range is 1-4
        /// When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
        /// This value is only valid when InstanceChargeType is PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Period
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: Unit of period. Week or Month.
        /// This value is only valid when InstanceChargeType is PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodUnit", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PeriodUnit
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VSwitchId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IAppListProperty), fullyQualifiedName: "@alicloud/ros-cdk-gws.RosInstance.AppListProperty")]
        public interface IAppListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: appArgs: The running parameters of the application.
            /// </remarks>
            [JsiiProperty(name: "appArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? AppArgs
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: appName: The name of the application.
            /// </remarks>
            [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? AppName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: appPath: The running path of the application.
            /// </remarks>
            [JsiiProperty(name: "appPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? AppPath
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IAppListProperty), fullyQualifiedName: "@alicloud/ros-cdk-gws.RosInstance.AppListProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gws.RosInstance.IAppListProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: appArgs: The running parameters of the application.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "appArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? AppArgs
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: appName: The name of the application.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? AppName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: appPath: The running path of the application.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "appPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? AppPath
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-gws.RosInstance.AppListProperty")]
        public class AppListProperty : AlibabaCloud.SDK.ROS.CDK.Gws.RosInstance.IAppListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: appArgs: The running parameters of the application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appArgs", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? AppArgs
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: appName: The name of the application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? AppName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: appPath: The running path of the application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appPath", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? AppPath
            {
                get;
                set;
            }
        }
    }
}
