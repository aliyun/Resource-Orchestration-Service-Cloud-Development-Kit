using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    /// <summary>A ROS template type:  `ALIYUN::FOAS::Cluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Foas.RosCluster), fullyQualifiedName: "@alicloud/ros-cdk-foas.RosCluster", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-foas.RosClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosCluster : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::FOAS::Cluster`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Foas.IRosClusterProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosCluster(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Foas.RosCluster))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterId: Cluster ID.
        /// </remarks>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: EngineVersions: Engine Versions.
        /// </remarks>
        [JsiiProperty(name: "attrEngineVersions", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEngineVersions
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: MasterInstanceInfos: Master instance infos.
        /// </remarks>
        [JsiiProperty(name: "attrMasterInstanceInfos", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMasterInstanceInfos
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: OrderId: Order ID.
        /// </remarks>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: SecurityGroupId: Security group Id.
        /// </remarks>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: SlaveInstanceInfos: Slave instance infos.
        /// </remarks>
        [JsiiProperty(name: "attrSlaveInstanceInfos", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSlaveInstanceInfos
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: State: Cluster status.
        /// </remarks>
        [JsiiProperty(name: "attrState", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrState
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VSwitchIds: VSwitch Ids.
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVSwitchIds
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ClusterName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Cluster description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Description
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
        /// <strong>Property</strong>: ossBucket: Bucket name in your OSS.
        /// </remarks>
        [JsiiProperty(name: "ossBucket", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string OssBucket
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch ID.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string VSwitchId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: order: Order detail. Only one of property Order or OrderId can be specified.
        /// Order is not suggested.
        /// Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        /// The order can not be cancelled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-foas.RosCluster.OrderProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Order
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: orderId: Order Id. Only one of property Order or OrderId can be specified.
        /// OrderId is suggested.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "orderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? OrderId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IOrderProperty), fullyQualifiedName: "@alicloud/ros-cdk-foas.RosCluster.OrderProperty")]
        public interface IOrderProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: masterSpec: Master spec, such as Ecs_4c16g.
            /// </remarks>
            [JsiiProperty(name: "masterSpec", typeJson: "{\"primitive\":\"string\"}")]
            string MasterSpec
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: slaveSpec: Master spec, such as Ecs_4c16g.
            /// </remarks>
            [JsiiProperty(name: "slaveSpec", typeJson: "{\"primitive\":\"string\"}")]
            string SlaveSpec
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: masterNumber: Number of masters. Valid values: 1, 3. Default to 3.
            /// </remarks>
            [JsiiProperty(name: "masterNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? MasterNumber
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: payModel: Pay model. Valid values: pre, post. Default to post.
            /// </remarks>
            [JsiiProperty(name: "payModel", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? PayModel
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: period: Pre paid time period. Unit is month. Default to 1.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Period
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slaveNumber: Number of masters. Valid values: 2-1000. Default to 2.
            /// </remarks>
            [JsiiProperty(name: "slaveNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? SlaveNumber
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IOrderProperty), fullyQualifiedName: "@alicloud/ros-cdk-foas.RosCluster.OrderProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Foas.RosCluster.IOrderProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: masterSpec: Master spec, such as Ecs_4c16g.
                /// </remarks>
                [JsiiProperty(name: "masterSpec", typeJson: "{\"primitive\":\"string\"}")]
                public string MasterSpec
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: slaveSpec: Master spec, such as Ecs_4c16g.
                /// </remarks>
                [JsiiProperty(name: "slaveSpec", typeJson: "{\"primitive\":\"string\"}")]
                public string SlaveSpec
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: masterNumber: Number of masters. Valid values: 1, 3. Default to 3.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "masterNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? MasterNumber
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: payModel: Pay model. Valid values: pre, post. Default to post.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "payModel", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? PayModel
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: period: Pre paid time period. Unit is month. Default to 1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Period
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slaveNumber: Number of masters. Valid values: 2-1000. Default to 2.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slaveNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? SlaveNumber
                {
                    get => GetInstanceProperty<double?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-foas.RosCluster.OrderProperty")]
        public class OrderProperty : AlibabaCloud.SDK.ROS.CDK.Foas.RosCluster.IOrderProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: masterSpec: Master spec, such as Ecs_4c16g.
            /// </remarks>
            [JsiiProperty(name: "masterSpec", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string MasterSpec
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: slaveSpec: Master spec, such as Ecs_4c16g.
            /// </remarks>
            [JsiiProperty(name: "slaveSpec", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string SlaveSpec
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: masterNumber: Number of masters. Valid values: 1, 3. Default to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? MasterNumber
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: payModel: Pay model. Valid values: pre, post. Default to post.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payModel", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? PayModel
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: period: Pre paid time period. Unit is month. Default to 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Period
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: slaveNumber: Number of masters. Valid values: 2-1000. Default to 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slaveNumber", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? SlaveNumber
            {
                get;
                set;
            }
        }
    }
}
