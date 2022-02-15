using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>A ROS template type:  `ALIYUN::GA::IpSets`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosIpSets), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosIpSets", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosIpSetsProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosIpSets : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::GA::IpSets`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosIpSets(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ga.IRosIpSetsProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosIpSets(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosIpSets(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosIpSets))!;

        /// <remarks>
        /// <strong>Attribute</strong>: AccelerateRegionIds: The ID list of the accelerate region.
        /// </remarks>
        [JsiiProperty(name: "attrAccelerateRegionIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAccelerateRegionIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: IpSetIds: The ID list of the ip set.
        /// </remarks>
        [JsiiProperty(name: "attrIpSetIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrIpSetIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: IpVersions: The IP version list of the accelerate region.
        /// </remarks>
        [JsiiProperty(name: "attrIpVersions", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrIpVersions
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: accelerateRegion:
        /// </remarks>
        [JsiiProperty(name: "accelerateRegion", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosIpSets.AccelerateRegionProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object AccelerateRegion
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the GA instance.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AcceleratorId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IAccelerateRegionProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosIpSets.AccelerateRegionProperty")]
        public interface IAccelerateRegionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: accelerateRegionId: The ID of the region where traffic is to be accelerated.
            /// </remarks>
            [JsiiProperty(name: "accelerateRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object AccelerateRegionId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit/s.
            /// Note
            /// The minimum bandwidth allocated to each accelerated region is 2 Mbit/s.
            /// The total bandwidth for all regions must not exceed the amount included in your basic
            /// bandwidth plan.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Bandwidth
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipVersion: IP version. Valid values: IPv4, IPv6
            /// </remarks>
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IpVersion
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IAccelerateRegionProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosIpSets.AccelerateRegionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.RosIpSets.IAccelerateRegionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: accelerateRegionId: The ID of the region where traffic is to be accelerated.
                /// </remarks>
                [JsiiProperty(name: "accelerateRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object AccelerateRegionId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit/s.
                /// Note
                /// The minimum bandwidth allocated to each accelerated region is 2 Mbit/s.
                /// The total bandwidth for all regions must not exceed the amount included in your basic
                /// bandwidth plan.
                /// </remarks>
                [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Bandwidth
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: ipVersion: IP version. Valid values: IPv4, IPv6
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpVersion
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosIpSets.AccelerateRegionProperty")]
        public class AccelerateRegionProperty : AlibabaCloud.SDK.ROS.CDK.Ga.RosIpSets.IAccelerateRegionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: accelerateRegionId: The ID of the region where traffic is to be accelerated.
            /// </remarks>
            [JsiiProperty(name: "accelerateRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccelerateRegionId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The bandwidth allocated to the acceleration region. Unit: Mbit/s.
            /// Note
            /// The minimum bandwidth allocated to each accelerated region is 2 Mbit/s.
            /// The total bandwidth for all regions must not exceed the amount included in your basic
            /// bandwidth plan.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bandwidth
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipVersion: IP version. Valid values: IPv4, IPv6
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get;
                set;
            }
        }
    }
}
