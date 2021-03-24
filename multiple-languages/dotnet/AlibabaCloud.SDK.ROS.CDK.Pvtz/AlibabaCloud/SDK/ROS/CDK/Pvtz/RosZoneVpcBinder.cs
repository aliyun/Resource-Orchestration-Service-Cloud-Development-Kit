using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>A ROS template type:  `ALIYUN::PVTZ::ZoneVpcBinder`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZoneVpcBinder), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneVpcBinder", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZoneVpcBinderProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosZoneVpcBinder : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::PVTZ::ZoneVpcBinder`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosZoneVpcBinder(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Pvtz.IRosZoneVpcBinderProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosZoneVpcBinder(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosZoneVpcBinder(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZoneVpcBinder))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Vpcs: Vpc list
        /// </remarks>
        [JsiiProperty(name: "attrVpcs", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcs
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ZoneId: Zone Id
        /// </remarks>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcs:
        /// </remarks>
        [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object Vpcs
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Zone Id
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ZoneId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IVpcsProperty), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty")]
        public interface IVpcsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: regionId: Vpcs attribute, region Id
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}")]
            string RegionId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: Vpcs attribute, vpc Id
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
            string VpcId
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IVpcsProperty), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZoneVpcBinder.IVpcsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: regionId: Vpcs attribute, region Id
                /// </remarks>
                [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}")]
                public string RegionId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: vpcId: Vpcs attribute, vpc Id
                /// </remarks>
                [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
                public string VpcId
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty")]
        public class VpcsProperty : AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZoneVpcBinder.IVpcsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: regionId: Vpcs attribute, region Id
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string RegionId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: Vpcs attribute, vpc Id
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string VpcId
            {
                get;
                set;
            }
        }
    }
}
