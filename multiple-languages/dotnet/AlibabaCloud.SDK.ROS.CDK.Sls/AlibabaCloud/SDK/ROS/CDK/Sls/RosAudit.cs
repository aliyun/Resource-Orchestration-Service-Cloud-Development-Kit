using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>A ROS template type:  `ALIYUN::SLS::Audit`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosAudit), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAudit", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-sls.RosAuditProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosAudit : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLS::Audit`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosAudit(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Sls.IRosAuditProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAudit(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAudit(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosAudit))!;

        /// <remarks>
        /// <strong>Attribute</strong>: DisplayName: Name of SLS log audit.
        /// </remarks>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDisplayName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: displayName: Name of SLS log audit.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object DisplayName
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

        /// <remarks>
        /// <strong>Property</strong>: variableMap: Log audit detailed configuration.
        /// </remarks>
        [JsiiProperty(name: "variableMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty\"}]}}")]
        public virtual object VariableMap
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: multiAccount: Multi-account configuration, please fill in multiple aliuid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "multiAccount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? MultiAccount
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IVariableMapProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty")]
        public interface IVariableMapProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: actiontrailEnabled: Notification type. Support Email, SMS, DingTalk. Default true.
            /// </remarks>
            [JsiiProperty(name: "actiontrailEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ActiontrailEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: actiontrailOpenapiCollectionPolicy: Actiontrail openapi collection policy
            /// </remarks>
            [JsiiProperty(name: "actiontrailOpenapiCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ActiontrailOpenapiCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: actiontrailOpenapiPolicySetting: Actiontrail openapi policy setting.
            /// </remarks>
            [JsiiProperty(name: "actiontrailOpenapiPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ActiontrailOpenapiPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: actiontrailTiEnabled: Threat Intelligence of actiontrail.
            /// </remarks>
            [JsiiProperty(name: "actiontrailTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ActiontrailTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: actiontrailTtl: Actiontrail action log TTL.
            /// </remarks>
            [JsiiProperty(name: "actiontrailTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ActiontrailTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayAccessCollectionPolicy: Apigateway audit collection policy
            /// </remarks>
            [JsiiProperty(name: "apigatewayAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ApigatewayAccessCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayAccessPolicySetting: Apigateway audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "apigatewayAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ApigatewayAccessPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayEnabled: API Gateway Log Switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "apigatewayEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ApigatewayEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayTiEnabled: Threat Intelligence of Apigateway.
            /// </remarks>
            [JsiiProperty(name: "apigatewayTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ApigatewayTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayTtl: API Gateway ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "apigatewayTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ApigatewayTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectEnabled: Appconnect access log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "appconnectEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AppconnectEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectOpCollectionPolicy: Appconnect audit collection policy
            /// </remarks>
            [JsiiProperty(name: "appconnectOpCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AppconnectOpCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectOpPolicySetting: Appconnect audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "appconnectOpPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AppconnectOpPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectTiEnabled: Threat Intelligence of Appconnect.
            /// </remarks>
            [JsiiProperty(name: "appconnectTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AppconnectTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectTtl: Appconnect log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "appconnectTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AppconnectTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionAuditCollectionPolicy: Bastion audit collection policy
            /// </remarks>
            [JsiiProperty(name: "bastionAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? BastionAuditCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionAuditPolicySetting: Bastion audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "bastionAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? BastionAuditPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionEnabled: Fortress machine operation log switch.Default true.
            /// </remarks>
            [JsiiProperty(name: "bastionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? BastionEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionTiEnabled: Threat Intelligence of Bastion.
            /// </remarks>
            [JsiiProperty(name: "bastionTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? BastionTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionTtl: Fort machine centralized ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "bastionTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? BastionTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallAccessCollectionPolicy: Cloud firewall audit collection policy
            /// </remarks>
            [JsiiProperty(name: "cloudfirewallAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CloudfirewallAccessCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallAccessPolicySetting: Cloud firewall audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "cloudfirewallAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CloudfirewallAccessPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallEnabled: Cloud firewall log switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "cloudfirewallEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CloudfirewallEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallTiEnabled: Threat Intelligence of Cloud firewall.
            /// </remarks>
            [JsiiProperty(name: "cloudfirewallTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CloudfirewallTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallTtl: Cloud firewall log centralized ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "cloudfirewallTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CloudfirewallTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsCallbackCollectionPolicy: Mobile push collection policy
            /// </remarks>
            [JsiiProperty(name: "cpsCallbackCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CpsCallbackCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsCallbackPolicySetting: Mobile push policy setting.
            /// </remarks>
            [JsiiProperty(name: "cpsCallbackPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CpsCallbackPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsEnabled: Mobile push log switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "cpsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CpsEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsTiEnabled: Threat Intelligence of mobile push.
            /// </remarks>
            [JsiiProperty(name: "cpsTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CpsTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsTtl: Mobile push ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "cpsTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CpsTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessCollectionPolicy: Ddos audit collection policy
            /// </remarks>
            [JsiiProperty(name: "ddosCooAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DdosCooAccessCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessEnabled: Ddos access log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "ddosCooAccessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DdosCooAccessEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessPolicySetting: Ddos audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "ddosCooAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DdosCooAccessPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessTiEnabled: Threat Intelligence of Ddos.
            /// </remarks>
            [JsiiProperty(name: "ddosCooAccessTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DdosCooAccessTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessTtl: Ddos log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "ddosCooAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DdosCooAccessTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditCollectionPolicy: DRDS audit collection policy
            /// </remarks>
            [JsiiProperty(name: "drdsAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DrdsAuditCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditEnabled: DRDS audit log switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "drdsAuditEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DrdsAuditEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditPolicySetting: DRDS audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "drdsAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DrdsAuditPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditTiEnabled: Threat Intelligence of DRDS.
            /// </remarks>
            [JsiiProperty(name: "drdsAuditTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DrdsAuditTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditTtl: DRDS log centralization ttl. Default 7.
            /// </remarks>
            [JsiiProperty(name: "drdsAuditTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DrdsAuditTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsSyncEnabled: DRDS sync to center switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "drdsSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DrdsSyncEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsSyncTtl: DRDS sync to center ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "drdsSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DrdsSyncTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditCollectionPolicy: K8s audit collection policy
            /// </remarks>
            [JsiiProperty(name: "k8SAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SAuditCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditEnabled: K8s access log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "k8SAuditEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SAuditEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditPolicySetting: K8s audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "k8SAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SAuditPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditTiEnabled: Threat Intelligence of K8s.
            /// </remarks>
            [JsiiProperty(name: "k8SAuditTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SAuditTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditTtl: K8s log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "k8SAuditTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SAuditTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventCollectionPolicy: K8s event collection policy
            /// </remarks>
            [JsiiProperty(name: "k8SEventCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SEventCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventEnabled: K8s event log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "k8SEventEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SEventEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventPolicySetting: K8s event policy setting.
            /// </remarks>
            [JsiiProperty(name: "k8SEventPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SEventPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventTiEnabled: Threat Intelligence of k8s event.
            /// </remarks>
            [JsiiProperty(name: "k8SEventTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SEventTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventTtl: K8s event log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "k8SEventTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SEventTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressCollectionPolicy: K8s Ingress collection policy
            /// </remarks>
            [JsiiProperty(name: "k8SIngressCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SIngressCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressEnabled: K8s Ingress log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "k8SIngressEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SIngressEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressPolicySetting: K8s Ingress policy setting.
            /// </remarks>
            [JsiiProperty(name: "k8SIngressPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SIngressPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressTiEnabled: Threat Intelligence of k8s Ingress.
            /// </remarks>
            [JsiiProperty(name: "k8SIngressTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SIngressTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressTtl: K8s Ingress log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "k8SIngressTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? K8SIngressTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nasAuditCollectionPolicy: Nas audit collection policy
            /// </remarks>
            [JsiiProperty(name: "nasAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NasAuditCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nasAuditPolicySetting: Nas audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "nasAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NasAuditPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nasEnabled: Nas log switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "nasEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NasEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nasTiEnabled: Threat Intelligence of Nas.
            /// </remarks>
            [JsiiProperty(name: "nasTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NasTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: nasTtl: Nas centralized ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "nasTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NasTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessCollectionPolicy: Oss access collection policy.
            /// </remarks>
            [JsiiProperty(name: "ossAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssAccessCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessEnabled: Access log switch of OSS. Default true.
            /// </remarks>
            [JsiiProperty(name: "ossAccessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssAccessEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessPolicySetting: Oss access policy setting.
            /// </remarks>
            [JsiiProperty(name: "ossAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssAccessPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessTiEnabled: Threat Intelligence of oss.
            /// </remarks>
            [JsiiProperty(name: "ossAccessTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssAccessTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessTtl: Access log TTL of OSS. Default 180.
            /// </remarks>
            [JsiiProperty(name: "ossAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssAccessTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringCollectionPolicy: Oss metering collection policy.
            /// </remarks>
            [JsiiProperty(name: "ossMeteringCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssMeteringCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringEnabled: OSS metering log switch.Default true.
            /// </remarks>
            [JsiiProperty(name: "ossMeteringEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssMeteringEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringPolicySetting: Oss metering policy setting.
            /// </remarks>
            [JsiiProperty(name: "ossMeteringPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssMeteringPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringTiEnabled: Threat Intelligence of oss metering.
            /// </remarks>
            [JsiiProperty(name: "ossMeteringTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssMeteringTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringTtl: OSS measurement log TTL. Default 180.
            /// </remarks>
            [JsiiProperty(name: "ossMeteringTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssMeteringTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossSyncEnabled: OSS synchronization to central configuration switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "ossSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssSyncEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ossSyncTtl: OSS synchronization to central TTL. Default 180.
            /// </remarks>
            [JsiiProperty(name: "ossSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OssSyncTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbAuditCollectionPolicy: POLARDB audit collection policy
            /// </remarks>
            [JsiiProperty(name: "polardbAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbAuditCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbAuditPolicySetting: POLARDB audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "polardbAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbAuditPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbEnabled: POLARDB audit log switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "polardbEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfCollectionPolicy: POLARDB perf collection policy.
            /// </remarks>
            [JsiiProperty(name: "polardbPerfCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbPerfCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfEnabled: POLARDB perf log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "polardbPerfEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbPerfEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfPolicySetting: POLARDB perf policy setting.
            /// </remarks>
            [JsiiProperty(name: "polardbPerfPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbPerfPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfTiEnabled: Threat Intelligence of POLARDB perf log.
            /// </remarks>
            [JsiiProperty(name: "polardbPerfTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbPerfTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfTtl: POLARDB perf log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "polardbPerfTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbPerfTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowCollectionPolicy: POLARDB slow collection policy.
            /// </remarks>
            [JsiiProperty(name: "polardbSlowCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbSlowCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowEnabled: POLARDB slow log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "polardbSlowEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbSlowEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowPolicySetting: POLARDB slow policy setting.
            /// </remarks>
            [JsiiProperty(name: "polardbSlowPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbSlowPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowTiEnabled: Threat Intelligence of POLARDB slow log.
            /// </remarks>
            [JsiiProperty(name: "polardbSlowTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbSlowTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowTtl: POLARDB slow log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "polardbSlowTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbSlowTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbTiEnabled: Threat Intelligence of POLARDB.
            /// </remarks>
            [JsiiProperty(name: "polardbTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbTtl: POLARDB log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "polardbTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PolardbTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsAuditCollectionPolicy: Rds audit collection policy
            /// </remarks>
            [JsiiProperty(name: "rdsAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsAuditCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsAuditPolicySetting: Rds audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "rdsAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsAuditPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsEnabled: RDS audit log switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "rdsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfCollectionPolicy: Rds perf collection policy.
            /// </remarks>
            [JsiiProperty(name: "rdsPerfCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsPerfCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfEnabled: RDS perf log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "rdsPerfEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsPerfEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfPolicySetting: Rds perf policy setting.
            /// </remarks>
            [JsiiProperty(name: "rdsPerfPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsPerfPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfTiEnabled: Threat Intelligence of rds perf log.
            /// </remarks>
            [JsiiProperty(name: "rdsPerfTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsPerfTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfTtl: Rds perf log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "rdsPerfTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsPerfTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowCollectionPolicy: Rds slow collection policy.
            /// </remarks>
            [JsiiProperty(name: "rdsSlowCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsSlowCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowEnabled: RDS slow log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "rdsSlowEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsSlowEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowPolicySetting: Rds slow policy setting.
            /// </remarks>
            [JsiiProperty(name: "rdsSlowPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsSlowPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowTiEnabled: Threat Intelligence of rds slow log.
            /// </remarks>
            [JsiiProperty(name: "rdsSlowTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsSlowTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowTtl: Rds slow log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "rdsSlowTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsSlowTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsTiEnabled: Threat Intelligence of rds.
            /// </remarks>
            [JsiiProperty(name: "rdsTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsTtl: Rds log centralization ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "rdsTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RdsTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditCollectionPolicy: Redis audit collection policy
            /// </remarks>
            [JsiiProperty(name: "redisAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RedisAuditCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditEnabled: Redis audit log switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "redisAuditEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RedisAuditEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditPolicySetting: Redis audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "redisAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RedisAuditPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditTiEnabled: Threat Intelligence of Redis audit.
            /// </remarks>
            [JsiiProperty(name: "redisAuditTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RedisAuditTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditTtl: Redis audit log centralization ttl. Default 7.
            /// </remarks>
            [JsiiProperty(name: "redisAuditTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RedisAuditTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: redisSyncEnabled: Redis sync to center switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "redisSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RedisSyncEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: redisSyncTtl: Redis sync to center switch. Default 180.
            /// </remarks>
            [JsiiProperty(name: "redisSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RedisSyncTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasCrackEnabled: Cloud Security Center Brute Force Log Switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasCrackEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasCrackEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasDnsEnabled: Cloud Security Center DNS resolution log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasDnsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasDnsEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasHttpEnabled: Cloud Security Center WEB access log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasHttpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasHttpEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasLocalDnsEnabled: Cloud security center local DNS log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasLocalDnsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasLocalDnsEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasLoginEnabled: Cloud security center login flow log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasLoginEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasLoginEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasNetworkEnabled: Cloud security center network connection log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasNetworkEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasNetworkEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasProcessEnabled: Cloud Security Center process startup log switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasProcessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasProcessEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSecurityAlertEnabled: Cloud Security Center Security Alarm Log Switch .Default false.
            /// </remarks>
            [JsiiProperty(name: "sasSecurityAlertEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasSecurityAlertEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSecurityHcEnabled: Cloud Security Center Baseline Log Switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasSecurityHcEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasSecurityHcEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSecurityVulEnabled: Cloud Security Center Vulnerability Log Switch.Default false.
            /// </remarks>
            [JsiiProperty(name: "sasSecurityVulEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasSecurityVulEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSessionEnabled: Cloud security center network session log switch.Default false.
            /// </remarks>
            [JsiiProperty(name: "sasSessionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasSessionEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSnapshotAccountEnabled: Cloud Security Center account snapshot switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasSnapshotAccountEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasSnapshotAccountEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSnapshotPortEnabled: Cloud Security Center Port Snapshot Switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasSnapshotPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasSnapshotPortEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSnapshotProcessEnabled: Cloud Security Center process snapshot switch. Default false.
            /// </remarks>
            [JsiiProperty(name: "sasSnapshotProcessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasSnapshotProcessEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasTiEnabled: Threat Intelligence of Cloud Security Center.
            /// </remarks>
            [JsiiProperty(name: "sasTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sasTtl: Cloud Security Center centralized ttl. Default 180.
            /// </remarks>
            [JsiiProperty(name: "sasTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SasTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessCollectionPolicy: SLB audit collection policy
            /// </remarks>
            [JsiiProperty(name: "slbAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbAccessCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessEnabled: Slb log switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "slbAccessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbAccessEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessPolicySetting: SLB audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "slbAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbAccessPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessTiEnabled: Threat Intelligence of SLB.
            /// </remarks>
            [JsiiProperty(name: "slbAccessTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbAccessTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessTtl: Slb centralized ttl. Default 7.
            /// </remarks>
            [JsiiProperty(name: "slbAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbAccessTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slbSyncEnabled: Slb sync to center switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "slbSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbSyncEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slbSyncTtl: Slb sync to center switch. Default 180.
            /// </remarks>
            [JsiiProperty(name: "slbSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbSyncTtl
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: wafAccessCollectionPolicy: Waf audit collection policy
            /// </remarks>
            [JsiiProperty(name: "wafAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? WafAccessCollectionPolicy
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: wafAccessPolicySetting: Waf audit policy setting.
            /// </remarks>
            [JsiiProperty(name: "wafAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? WafAccessPolicySetting
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: wafEnabled: Waf log switch. Default true.
            /// </remarks>
            [JsiiProperty(name: "wafEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? WafEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: wafTiEnabled: Threat Intelligence of Waf.
            /// </remarks>
            [JsiiProperty(name: "wafTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? WafTiEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: wafTtl: Waf centralized ttl. Default true.
            /// </remarks>
            [JsiiProperty(name: "wafTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? WafTtl
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IVariableMapProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosAudit.IVariableMapProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: actiontrailEnabled: Notification type. Support Email, SMS, DingTalk. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "actiontrailEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ActiontrailEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: actiontrailOpenapiCollectionPolicy: Actiontrail openapi collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "actiontrailOpenapiCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ActiontrailOpenapiCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: actiontrailOpenapiPolicySetting: Actiontrail openapi policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "actiontrailOpenapiPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ActiontrailOpenapiPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: actiontrailTiEnabled: Threat Intelligence of actiontrail.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "actiontrailTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ActiontrailTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: actiontrailTtl: Actiontrail action log TTL.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "actiontrailTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ActiontrailTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: apigatewayAccessCollectionPolicy: Apigateway audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "apigatewayAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ApigatewayAccessCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: apigatewayAccessPolicySetting: Apigateway audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "apigatewayAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ApigatewayAccessPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: apigatewayEnabled: API Gateway Log Switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "apigatewayEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ApigatewayEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: apigatewayTiEnabled: Threat Intelligence of Apigateway.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "apigatewayTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ApigatewayTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: apigatewayTtl: API Gateway ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "apigatewayTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ApigatewayTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: appconnectEnabled: Appconnect access log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "appconnectEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AppconnectEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: appconnectOpCollectionPolicy: Appconnect audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "appconnectOpCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AppconnectOpCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: appconnectOpPolicySetting: Appconnect audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "appconnectOpPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AppconnectOpPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: appconnectTiEnabled: Threat Intelligence of Appconnect.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "appconnectTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AppconnectTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: appconnectTtl: Appconnect log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "appconnectTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AppconnectTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: bastionAuditCollectionPolicy: Bastion audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "bastionAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? BastionAuditCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: bastionAuditPolicySetting: Bastion audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "bastionAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? BastionAuditPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: bastionEnabled: Fortress machine operation log switch.Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "bastionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? BastionEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: bastionTiEnabled: Threat Intelligence of Bastion.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "bastionTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? BastionTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: bastionTtl: Fort machine centralized ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "bastionTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? BastionTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cloudfirewallAccessCollectionPolicy: Cloud firewall audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cloudfirewallAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CloudfirewallAccessCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cloudfirewallAccessPolicySetting: Cloud firewall audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cloudfirewallAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CloudfirewallAccessPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cloudfirewallEnabled: Cloud firewall log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cloudfirewallEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CloudfirewallEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cloudfirewallTiEnabled: Threat Intelligence of Cloud firewall.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cloudfirewallTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CloudfirewallTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cloudfirewallTtl: Cloud firewall log centralized ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cloudfirewallTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CloudfirewallTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cpsCallbackCollectionPolicy: Mobile push collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cpsCallbackCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CpsCallbackCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cpsCallbackPolicySetting: Mobile push policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cpsCallbackPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CpsCallbackPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cpsEnabled: Mobile push log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cpsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CpsEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cpsTiEnabled: Threat Intelligence of mobile push.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cpsTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CpsTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cpsTtl: Mobile push ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cpsTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CpsTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ddosCooAccessCollectionPolicy: Ddos audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ddosCooAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DdosCooAccessCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ddosCooAccessEnabled: Ddos access log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ddosCooAccessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DdosCooAccessEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ddosCooAccessPolicySetting: Ddos audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ddosCooAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DdosCooAccessPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ddosCooAccessTiEnabled: Threat Intelligence of Ddos.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ddosCooAccessTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DdosCooAccessTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ddosCooAccessTtl: Ddos log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ddosCooAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DdosCooAccessTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: drdsAuditCollectionPolicy: DRDS audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "drdsAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DrdsAuditCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: drdsAuditEnabled: DRDS audit log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "drdsAuditEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DrdsAuditEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: drdsAuditPolicySetting: DRDS audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "drdsAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DrdsAuditPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: drdsAuditTiEnabled: Threat Intelligence of DRDS.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "drdsAuditTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DrdsAuditTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: drdsAuditTtl: DRDS log centralization ttl. Default 7.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "drdsAuditTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DrdsAuditTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: drdsSyncEnabled: DRDS sync to center switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "drdsSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DrdsSyncEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: drdsSyncTtl: DRDS sync to center ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "drdsSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DrdsSyncTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SAuditCollectionPolicy: K8s audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SAuditCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SAuditEnabled: K8s access log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SAuditEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SAuditEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SAuditPolicySetting: K8s audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SAuditPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SAuditTiEnabled: Threat Intelligence of K8s.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SAuditTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SAuditTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SAuditTtl: K8s log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SAuditTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SAuditTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SEventCollectionPolicy: K8s event collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SEventCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SEventCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SEventEnabled: K8s event log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SEventEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SEventEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SEventPolicySetting: K8s event policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SEventPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SEventPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SEventTiEnabled: Threat Intelligence of k8s event.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SEventTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SEventTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SEventTtl: K8s event log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SEventTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SEventTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SIngressCollectionPolicy: K8s Ingress collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SIngressCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SIngressCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SIngressEnabled: K8s Ingress log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SIngressEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SIngressEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SIngressPolicySetting: K8s Ingress policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SIngressPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SIngressPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SIngressTiEnabled: Threat Intelligence of k8s Ingress.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SIngressTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SIngressTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: k8SIngressTtl: K8s Ingress log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "k8SIngressTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? K8SIngressTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nasAuditCollectionPolicy: Nas audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nasAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NasAuditCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nasAuditPolicySetting: Nas audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nasAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NasAuditPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nasEnabled: Nas log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nasEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NasEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nasTiEnabled: Threat Intelligence of Nas.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nasTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NasTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: nasTtl: Nas centralized ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nasTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NasTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossAccessCollectionPolicy: Oss access collection policy.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssAccessCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossAccessEnabled: Access log switch of OSS. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossAccessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssAccessEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossAccessPolicySetting: Oss access policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssAccessPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossAccessTiEnabled: Threat Intelligence of oss.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossAccessTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssAccessTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossAccessTtl: Access log TTL of OSS. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssAccessTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossMeteringCollectionPolicy: Oss metering collection policy.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossMeteringCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssMeteringCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossMeteringEnabled: OSS metering log switch.Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossMeteringEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssMeteringEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossMeteringPolicySetting: Oss metering policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossMeteringPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssMeteringPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossMeteringTiEnabled: Threat Intelligence of oss metering.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossMeteringTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssMeteringTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossMeteringTtl: OSS measurement log TTL. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossMeteringTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssMeteringTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossSyncEnabled: OSS synchronization to central configuration switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssSyncEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ossSyncTtl: OSS synchronization to central TTL. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssSyncTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbAuditCollectionPolicy: POLARDB audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbAuditCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbAuditPolicySetting: POLARDB audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbAuditPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbEnabled: POLARDB audit log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbPerfCollectionPolicy: POLARDB perf collection policy.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbPerfCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbPerfCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbPerfEnabled: POLARDB perf log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbPerfEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbPerfEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbPerfPolicySetting: POLARDB perf policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbPerfPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbPerfPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbPerfTiEnabled: Threat Intelligence of POLARDB perf log.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbPerfTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbPerfTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbPerfTtl: POLARDB perf log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbPerfTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbPerfTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbSlowCollectionPolicy: POLARDB slow collection policy.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbSlowCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbSlowCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbSlowEnabled: POLARDB slow log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbSlowEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbSlowEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbSlowPolicySetting: POLARDB slow policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbSlowPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbSlowPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbSlowTiEnabled: Threat Intelligence of POLARDB slow log.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbSlowTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbSlowTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbSlowTtl: POLARDB slow log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbSlowTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbSlowTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbTiEnabled: Threat Intelligence of POLARDB.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: polardbTtl: POLARDB log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "polardbTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? PolardbTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsAuditCollectionPolicy: Rds audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsAuditCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsAuditPolicySetting: Rds audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsAuditPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsEnabled: RDS audit log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsPerfCollectionPolicy: Rds perf collection policy.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsPerfCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsPerfCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsPerfEnabled: RDS perf log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsPerfEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsPerfEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsPerfPolicySetting: Rds perf policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsPerfPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsPerfPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsPerfTiEnabled: Threat Intelligence of rds perf log.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsPerfTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsPerfTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsPerfTtl: Rds perf log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsPerfTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsPerfTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsSlowCollectionPolicy: Rds slow collection policy.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsSlowCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsSlowCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsSlowEnabled: RDS slow log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsSlowEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsSlowEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsSlowPolicySetting: Rds slow policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsSlowPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsSlowPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsSlowTiEnabled: Threat Intelligence of rds slow log.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsSlowTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsSlowTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsSlowTtl: Rds slow log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsSlowTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsSlowTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsTiEnabled: Threat Intelligence of rds.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsTtl: Rds log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: redisAuditCollectionPolicy: Redis audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "redisAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RedisAuditCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: redisAuditEnabled: Redis audit log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "redisAuditEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RedisAuditEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: redisAuditPolicySetting: Redis audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "redisAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RedisAuditPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: redisAuditTiEnabled: Threat Intelligence of Redis audit.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "redisAuditTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RedisAuditTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: redisAuditTtl: Redis audit log centralization ttl. Default 7.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "redisAuditTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RedisAuditTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: redisSyncEnabled: Redis sync to center switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "redisSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RedisSyncEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: redisSyncTtl: Redis sync to center switch. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "redisSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RedisSyncTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasCrackEnabled: Cloud Security Center Brute Force Log Switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasCrackEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasCrackEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasDnsEnabled: Cloud Security Center DNS resolution log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasDnsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasDnsEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasHttpEnabled: Cloud Security Center WEB access log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasHttpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasHttpEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasLocalDnsEnabled: Cloud security center local DNS log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasLocalDnsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasLocalDnsEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasLoginEnabled: Cloud security center login flow log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasLoginEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasLoginEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasNetworkEnabled: Cloud security center network connection log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasNetworkEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasNetworkEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasProcessEnabled: Cloud Security Center process startup log switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasProcessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasProcessEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasSecurityAlertEnabled: Cloud Security Center Security Alarm Log Switch .Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasSecurityAlertEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasSecurityAlertEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasSecurityHcEnabled: Cloud Security Center Baseline Log Switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasSecurityHcEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasSecurityHcEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasSecurityVulEnabled: Cloud Security Center Vulnerability Log Switch.Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasSecurityVulEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasSecurityVulEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasSessionEnabled: Cloud security center network session log switch.Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasSessionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasSessionEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasSnapshotAccountEnabled: Cloud Security Center account snapshot switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasSnapshotAccountEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasSnapshotAccountEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasSnapshotPortEnabled: Cloud Security Center Port Snapshot Switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasSnapshotPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasSnapshotPortEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasSnapshotProcessEnabled: Cloud Security Center process snapshot switch. Default false.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasSnapshotProcessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasSnapshotProcessEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasTiEnabled: Threat Intelligence of Cloud Security Center.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sasTtl: Cloud Security Center centralized ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slbAccessCollectionPolicy: SLB audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbAccessCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slbAccessEnabled: Slb log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbAccessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbAccessEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slbAccessPolicySetting: SLB audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbAccessPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slbAccessTiEnabled: Threat Intelligence of SLB.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbAccessTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbAccessTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slbAccessTtl: Slb centralized ttl. Default 7.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbAccessTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slbSyncEnabled: Slb sync to center switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbSyncEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slbSyncTtl: Slb sync to center switch. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbSyncTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: wafAccessCollectionPolicy: Waf audit collection policy
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "wafAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? WafAccessCollectionPolicy
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: wafAccessPolicySetting: Waf audit policy setting.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "wafAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? WafAccessPolicySetting
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: wafEnabled: Waf log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "wafEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? WafEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: wafTiEnabled: Threat Intelligence of Waf.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "wafTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? WafTiEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: wafTtl: Waf centralized ttl. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "wafTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? WafTtl
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty")]
        public class VariableMapProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosAudit.IVariableMapProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: actiontrailEnabled: Notification type. Support Email, SMS, DingTalk. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "actiontrailEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ActiontrailEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: actiontrailOpenapiCollectionPolicy: Actiontrail openapi collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "actiontrailOpenapiCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ActiontrailOpenapiCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: actiontrailOpenapiPolicySetting: Actiontrail openapi policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "actiontrailOpenapiPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ActiontrailOpenapiPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: actiontrailTiEnabled: Threat Intelligence of actiontrail.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "actiontrailTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ActiontrailTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: actiontrailTtl: Actiontrail action log TTL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "actiontrailTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ActiontrailTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayAccessCollectionPolicy: Apigateway audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apigatewayAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ApigatewayAccessCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayAccessPolicySetting: Apigateway audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apigatewayAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ApigatewayAccessPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayEnabled: API Gateway Log Switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apigatewayEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ApigatewayEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayTiEnabled: Threat Intelligence of Apigateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apigatewayTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ApigatewayTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: apigatewayTtl: API Gateway ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apigatewayTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ApigatewayTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectEnabled: Appconnect access log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appconnectEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AppconnectEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectOpCollectionPolicy: Appconnect audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appconnectOpCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AppconnectOpCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectOpPolicySetting: Appconnect audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appconnectOpPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AppconnectOpPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectTiEnabled: Threat Intelligence of Appconnect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appconnectTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AppconnectTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: appconnectTtl: Appconnect log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appconnectTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? AppconnectTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionAuditCollectionPolicy: Bastion audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bastionAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? BastionAuditCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionAuditPolicySetting: Bastion audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bastionAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? BastionAuditPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionEnabled: Fortress machine operation log switch.Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bastionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? BastionEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionTiEnabled: Threat Intelligence of Bastion.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bastionTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? BastionTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: bastionTtl: Fort machine centralized ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bastionTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? BastionTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallAccessCollectionPolicy: Cloud firewall audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloudfirewallAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CloudfirewallAccessCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallAccessPolicySetting: Cloud firewall audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloudfirewallAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CloudfirewallAccessPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallEnabled: Cloud firewall log switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloudfirewallEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CloudfirewallEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallTiEnabled: Threat Intelligence of Cloud firewall.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloudfirewallTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CloudfirewallTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cloudfirewallTtl: Cloud firewall log centralized ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloudfirewallTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CloudfirewallTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsCallbackCollectionPolicy: Mobile push collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpsCallbackCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CpsCallbackCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsCallbackPolicySetting: Mobile push policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpsCallbackPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CpsCallbackPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsEnabled: Mobile push log switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CpsEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsTiEnabled: Threat Intelligence of mobile push.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpsTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CpsTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpsTtl: Mobile push ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpsTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CpsTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessCollectionPolicy: Ddos audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ddosCooAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DdosCooAccessCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessEnabled: Ddos access log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ddosCooAccessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DdosCooAccessEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessPolicySetting: Ddos audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ddosCooAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DdosCooAccessPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessTiEnabled: Threat Intelligence of Ddos.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ddosCooAccessTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DdosCooAccessTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ddosCooAccessTtl: Ddos log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ddosCooAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DdosCooAccessTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditCollectionPolicy: DRDS audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "drdsAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DrdsAuditCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditEnabled: DRDS audit log switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "drdsAuditEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DrdsAuditEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditPolicySetting: DRDS audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "drdsAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DrdsAuditPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditTiEnabled: Threat Intelligence of DRDS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "drdsAuditTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DrdsAuditTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsAuditTtl: DRDS log centralization ttl. Default 7.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "drdsAuditTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DrdsAuditTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsSyncEnabled: DRDS sync to center switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "drdsSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DrdsSyncEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: drdsSyncTtl: DRDS sync to center ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "drdsSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DrdsSyncTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditCollectionPolicy: K8s audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SAuditCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditEnabled: K8s access log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SAuditEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SAuditEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditPolicySetting: K8s audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SAuditPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditTiEnabled: Threat Intelligence of K8s.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SAuditTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SAuditTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SAuditTtl: K8s log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SAuditTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SAuditTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventCollectionPolicy: K8s event collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SEventCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SEventCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventEnabled: K8s event log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SEventEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SEventEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventPolicySetting: K8s event policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SEventPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SEventPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventTiEnabled: Threat Intelligence of k8s event.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SEventTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SEventTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SEventTtl: K8s event log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SEventTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SEventTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressCollectionPolicy: K8s Ingress collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SIngressCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SIngressCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressEnabled: K8s Ingress log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SIngressEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SIngressEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressPolicySetting: K8s Ingress policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SIngressPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SIngressPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressTiEnabled: Threat Intelligence of k8s Ingress.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SIngressTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SIngressTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: k8SIngressTtl: K8s Ingress log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "k8SIngressTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? K8SIngressTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nasAuditCollectionPolicy: Nas audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? NasAuditCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nasAuditPolicySetting: Nas audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? NasAuditPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nasEnabled: Nas log switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? NasEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nasTiEnabled: Threat Intelligence of Nas.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? NasTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: nasTtl: Nas centralized ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? NasTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessCollectionPolicy: Oss access collection policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssAccessCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessEnabled: Access log switch of OSS. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossAccessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssAccessEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessPolicySetting: Oss access policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssAccessPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessTiEnabled: Threat Intelligence of oss.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossAccessTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssAccessTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossAccessTtl: Access log TTL of OSS. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssAccessTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringCollectionPolicy: Oss metering collection policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossMeteringCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssMeteringCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringEnabled: OSS metering log switch.Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossMeteringEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssMeteringEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringPolicySetting: Oss metering policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossMeteringPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssMeteringPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringTiEnabled: Threat Intelligence of oss metering.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossMeteringTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssMeteringTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossMeteringTtl: OSS measurement log TTL. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossMeteringTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssMeteringTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossSyncEnabled: OSS synchronization to central configuration switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssSyncEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossSyncTtl: OSS synchronization to central TTL. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssSyncTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbAuditCollectionPolicy: POLARDB audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbAuditCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbAuditPolicySetting: POLARDB audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbAuditPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbEnabled: POLARDB audit log switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfCollectionPolicy: POLARDB perf collection policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbPerfCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbPerfCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfEnabled: POLARDB perf log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbPerfEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbPerfEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfPolicySetting: POLARDB perf policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbPerfPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbPerfPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfTiEnabled: Threat Intelligence of POLARDB perf log.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbPerfTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbPerfTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbPerfTtl: POLARDB perf log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbPerfTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbPerfTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowCollectionPolicy: POLARDB slow collection policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbSlowCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbSlowCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowEnabled: POLARDB slow log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbSlowEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbSlowEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowPolicySetting: POLARDB slow policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbSlowPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbSlowPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowTiEnabled: Threat Intelligence of POLARDB slow log.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbSlowTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbSlowTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbSlowTtl: POLARDB slow log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbSlowTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbSlowTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbTiEnabled: Threat Intelligence of POLARDB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: polardbTtl: POLARDB log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polardbTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? PolardbTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsAuditCollectionPolicy: Rds audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsAuditCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsAuditPolicySetting: Rds audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsAuditPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsEnabled: RDS audit log switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfCollectionPolicy: Rds perf collection policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsPerfCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsPerfCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfEnabled: RDS perf log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsPerfEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsPerfEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfPolicySetting: Rds perf policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsPerfPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsPerfPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfTiEnabled: Threat Intelligence of rds perf log.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsPerfTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsPerfTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPerfTtl: Rds perf log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsPerfTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsPerfTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowCollectionPolicy: Rds slow collection policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsSlowCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsSlowCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowEnabled: RDS slow log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsSlowEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsSlowEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowPolicySetting: Rds slow policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsSlowPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsSlowPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowTiEnabled: Threat Intelligence of rds slow log.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsSlowTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsSlowTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsSlowTtl: Rds slow log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsSlowTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsSlowTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsTiEnabled: Threat Intelligence of rds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsTtl: Rds log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditCollectionPolicy: Redis audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redisAuditCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RedisAuditCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditEnabled: Redis audit log switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redisAuditEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RedisAuditEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditPolicySetting: Redis audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redisAuditPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RedisAuditPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditTiEnabled: Threat Intelligence of Redis audit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redisAuditTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RedisAuditTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: redisAuditTtl: Redis audit log centralization ttl. Default 7.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redisAuditTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RedisAuditTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: redisSyncEnabled: Redis sync to center switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redisSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RedisSyncEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: redisSyncTtl: Redis sync to center switch. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redisSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RedisSyncTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasCrackEnabled: Cloud Security Center Brute Force Log Switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasCrackEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasCrackEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasDnsEnabled: Cloud Security Center DNS resolution log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasDnsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasDnsEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasHttpEnabled: Cloud Security Center WEB access log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasHttpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasHttpEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasLocalDnsEnabled: Cloud security center local DNS log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasLocalDnsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasLocalDnsEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasLoginEnabled: Cloud security center login flow log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasLoginEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasLoginEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasNetworkEnabled: Cloud security center network connection log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasNetworkEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasNetworkEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasProcessEnabled: Cloud Security Center process startup log switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasProcessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasProcessEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSecurityAlertEnabled: Cloud Security Center Security Alarm Log Switch .Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSecurityAlertEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasSecurityAlertEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSecurityHcEnabled: Cloud Security Center Baseline Log Switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSecurityHcEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasSecurityHcEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSecurityVulEnabled: Cloud Security Center Vulnerability Log Switch.Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSecurityVulEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasSecurityVulEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSessionEnabled: Cloud security center network session log switch.Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSessionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasSessionEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSnapshotAccountEnabled: Cloud Security Center account snapshot switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSnapshotAccountEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasSnapshotAccountEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSnapshotPortEnabled: Cloud Security Center Port Snapshot Switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSnapshotPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasSnapshotPortEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSnapshotProcessEnabled: Cloud Security Center process snapshot switch. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSnapshotProcessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasSnapshotProcessEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasTiEnabled: Threat Intelligence of Cloud Security Center.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sasTtl: Cloud Security Center centralized ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SasTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessCollectionPolicy: SLB audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SlbAccessCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessEnabled: Slb log switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbAccessEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SlbAccessEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessPolicySetting: SLB audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SlbAccessPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessTiEnabled: Threat Intelligence of SLB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbAccessTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SlbAccessTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: slbAccessTtl: Slb centralized ttl. Default 7.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SlbAccessTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: slbSyncEnabled: Slb sync to center switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbSyncEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SlbSyncEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: slbSyncTtl: Slb sync to center switch. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbSyncTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SlbSyncTtl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: wafAccessCollectionPolicy: Waf audit collection policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "wafAccessCollectionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? WafAccessCollectionPolicy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: wafAccessPolicySetting: Waf audit policy setting.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "wafAccessPolicySetting", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? WafAccessPolicySetting
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: wafEnabled: Waf log switch. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "wafEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? WafEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: wafTiEnabled: Threat Intelligence of Waf.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "wafTiEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? WafTiEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: wafTtl: Waf centralized ttl. Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "wafTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? WafTtl
            {
                get;
                set;
            }
        }
    }
}
