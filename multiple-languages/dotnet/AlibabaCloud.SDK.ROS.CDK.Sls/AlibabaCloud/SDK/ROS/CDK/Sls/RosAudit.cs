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
            /// <strong>Property</strong>: actiontrailTtl: Actiontril action log TTL.
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
            /// <strong>Property</strong>: cloudfirewallTtl: Cloud firewall switch.Default true.
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
            /// <strong>Property</strong>: ossAccessTtl: ccess log TTL of OSS. Default 180.
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
            /// <strong>Property</strong>: rdsTtl: Dds log centralization ttl. Default 180.
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
            /// <strong>Property</strong>: slbAccessTtl: Slb centralized ttl. Default 180.
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
                /// <strong>Property</strong>: actiontrailTtl: Actiontril action log TTL.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "actiontrailTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ActiontrailTtl
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
                /// <strong>Property</strong>: apigatewayTtl: API Gateway ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "apigatewayTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ApigatewayTtl
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
                /// <strong>Property</strong>: bastionTtl: Fort machine centralized ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "bastionTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? BastionTtl
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cloudfirewallTtl: Cloud firewall switch.Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cloudfirewallTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CloudfirewallTtl
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
                /// <strong>Property</strong>: cpsTtl: Mobile push ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cpsTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CpsTtl
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
                /// <strong>Property</strong>: nasTtl: Nas centralized ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "nasTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NasTtl
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
                /// <strong>Property</strong>: ossAccessTtl: ccess log TTL of OSS. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ossAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OssAccessTtl
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
                /// <strong>Property</strong>: rdsEnabled: RDS audit log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rdsTtl: Dds log centralization ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rdsTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RdsTtl
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
                /// <strong>Property</strong>: sasTtl: Cloud Security Center centralized ttl. Default 180.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sasTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SasTtl
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
                /// <strong>Property</strong>: slbAccessTtl: Slb centralized ttl. Default 180.
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
                /// <strong>Property</strong>: wafEnabled: Waf log switch. Default true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "wafEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? WafEnabled
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
            /// <strong>Property</strong>: actiontrailTtl: Actiontril action log TTL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "actiontrailTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? ActiontrailTtl
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
            /// <strong>Property</strong>: cloudfirewallTtl: Cloud firewall switch.Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloudfirewallTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? CloudfirewallTtl
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
            /// <strong>Property</strong>: ossAccessTtl: ccess log TTL of OSS. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossAccessTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? OssAccessTtl
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
            /// <strong>Property</strong>: rdsTtl: Dds log centralization ttl. Default 180.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RdsTtl
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
            /// <strong>Property</strong>: slbAccessTtl: Slb centralized ttl. Default 180.
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
