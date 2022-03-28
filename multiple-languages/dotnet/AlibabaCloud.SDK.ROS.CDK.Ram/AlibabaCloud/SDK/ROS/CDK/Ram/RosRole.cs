using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>A ROS template type:  `ALIYUN::RAM::Role`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ram.RosRole), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.RosRoleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosRole : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::RAM::Role`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosRole(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ram.IRosRoleProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRole(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRole(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ram.RosRole))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Arn: Name of alicloud resource.
        /// </remarks>
        [JsiiProperty(name: "attrArn", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrArn
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RoleId: Id of ram role.
        /// </remarks>
        [JsiiProperty(name: "attrRoleId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRoleId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RoleName: Name of ram role.
        /// </remarks>
        [JsiiProperty(name: "attrRoleName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRoleName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        /// </remarks>
        [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty\"}]}}")]
        public virtual object AssumeRolePolicyDocument
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
        /// <strong>Property</strong>: roleName: Specifies the role name, containing up to 64 characters.
        /// </remarks>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RoleName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether force detach the policies attached to the role. Default value is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeletionForce
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Remark information, up to 1024 characters or Chinese characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Description
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: maxSessionDuration: The maximum session duration of the RAM role.
        /// Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        /// The default value is used if the parameter is not specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MaxSessionDuration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: policies: Describes what actions are allowed on what resources.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Policies
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: policyAttachments: System and custom policy names to attach.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policyAttachments", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PolicyAttachmentsProperty\"}]}}", isOptional: true)]
        public virtual object? PolicyAttachments
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IAssumeRolePolicyDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty")]
        public interface IAssumeRolePolicyDocumentProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: statement: A policy consists of one or more statements.
            /// </remarks>
            [JsiiProperty(name: "statement", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.StatementProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object Statement
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: version: You can use versions to track changes to a managed policy.
            /// </remarks>
            [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Version
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IAssumeRolePolicyDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IAssumeRolePolicyDocumentProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: statement: A policy consists of one or more statements.
                /// </remarks>
                [JsiiProperty(name: "statement", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.StatementProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object Statement
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: version: You can use versions to track changes to a managed policy.
                /// </remarks>
                [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Version
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty")]
        public class AssumeRolePolicyDocumentProperty : AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IAssumeRolePolicyDocumentProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: statement: A policy consists of one or more statements.
            /// </remarks>
            [JsiiProperty(name: "statement", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.StatementProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Statement
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: version: You can use versions to track changes to a managed policy.
            /// </remarks>
            [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Version
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IConditionProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.ConditionProperty")]
        public interface IConditionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: bool: undefined
            /// </remarks>
            [JsiiProperty(name: "bool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Bool
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dateEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "dateEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DateEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dateGreaterThan: undefined
            /// </remarks>
            [JsiiProperty(name: "dateGreaterThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DateGreaterThan
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dateGreaterThanEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "dateGreaterThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DateGreaterThanEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dateLessThan: undefined
            /// </remarks>
            [JsiiProperty(name: "dateLessThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DateLessThan
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dateLessThanEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "dateLessThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DateLessThanEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dateNotEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "dateNotEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DateNotEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ipAddress: undefined
            /// </remarks>
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IpAddress
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: notIpAddress: undefined
            /// </remarks>
            [JsiiProperty(name: "notIpAddress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NotIpAddress
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: numericEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "numericEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NumericEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: numericGreaterThan: undefined
            /// </remarks>
            [JsiiProperty(name: "numericGreaterThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NumericGreaterThan
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: numericGreaterThanEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "numericGreaterThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NumericGreaterThanEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: numericLessThan: undefined
            /// </remarks>
            [JsiiProperty(name: "numericLessThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NumericLessThan
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: numericLessThanEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "numericLessThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NumericLessThanEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: numericNotEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "numericNotEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NumericNotEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stringEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "stringEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StringEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stringEqualsIgnoreCase: undefined
            /// </remarks>
            [JsiiProperty(name: "stringEqualsIgnoreCase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StringEqualsIgnoreCase
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stringLike: undefined
            /// </remarks>
            [JsiiProperty(name: "stringLike", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StringLike
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stringNotEquals: undefined
            /// </remarks>
            [JsiiProperty(name: "stringNotEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StringNotEquals
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stringNotEqualsIgnoreCase: undefined
            /// </remarks>
            [JsiiProperty(name: "stringNotEqualsIgnoreCase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StringNotEqualsIgnoreCase
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stringNotLike: undefined
            /// </remarks>
            [JsiiProperty(name: "stringNotLike", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StringNotLike
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IConditionProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.ConditionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IConditionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: bool: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "bool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? Bool
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dateEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dateEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? DateEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dateGreaterThan: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dateGreaterThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? DateGreaterThan
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dateGreaterThanEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dateGreaterThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? DateGreaterThanEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dateLessThan: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dateLessThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? DateLessThan
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dateLessThanEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dateLessThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? DateLessThanEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dateNotEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dateNotEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? DateNotEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ipAddress: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? IpAddress
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: notIpAddress: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "notIpAddress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? NotIpAddress
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: numericEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "numericEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? NumericEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: numericGreaterThan: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "numericGreaterThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? NumericGreaterThan
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: numericGreaterThanEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "numericGreaterThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? NumericGreaterThanEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: numericLessThan: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "numericLessThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? NumericLessThan
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: numericLessThanEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "numericLessThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? NumericLessThanEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: numericNotEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "numericNotEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? NumericNotEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stringEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stringEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? StringEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stringEqualsIgnoreCase: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stringEqualsIgnoreCase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? StringEqualsIgnoreCase
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stringLike: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stringLike", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? StringLike
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stringNotEquals: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stringNotEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? StringNotEquals
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stringNotEqualsIgnoreCase: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stringNotEqualsIgnoreCase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? StringNotEqualsIgnoreCase
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stringNotLike: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stringNotLike", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? StringNotLike
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRole.ConditionProperty")]
        public class ConditionProperty : AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IConditionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: bool: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bool", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Bool
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dateEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dateEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? DateEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dateGreaterThan: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dateGreaterThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? DateGreaterThan
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dateGreaterThanEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dateGreaterThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? DateGreaterThanEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dateLessThan: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dateLessThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? DateLessThan
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dateLessThanEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dateLessThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? DateLessThanEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dateNotEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dateNotEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? DateNotEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipAddress: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? IpAddress
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: notIpAddress: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "notIpAddress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? NotIpAddress
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: numericEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "numericEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? NumericEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: numericGreaterThan: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "numericGreaterThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? NumericGreaterThan
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: numericGreaterThanEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "numericGreaterThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? NumericGreaterThanEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: numericLessThan: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "numericLessThan", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? NumericLessThan
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: numericLessThanEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "numericLessThanEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? NumericLessThanEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: numericNotEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "numericNotEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? NumericNotEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stringEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stringEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? StringEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stringEqualsIgnoreCase: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stringEqualsIgnoreCase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? StringEqualsIgnoreCase
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stringLike: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stringLike", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? StringLike
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stringNotEquals: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stringNotEquals", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? StringNotEquals
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stringNotEqualsIgnoreCase: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stringNotEqualsIgnoreCase", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? StringNotEqualsIgnoreCase
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stringNotLike: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stringNotLike", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? StringNotLike
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPoliciesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PoliciesProperty")]
        public interface IPoliciesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: policyDocument: A policy document that describes what actions are allowed on which resources.
            /// </remarks>
            [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PolicyDocumentProperty\"}]}}")]
            object PolicyDocument
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: Specifies the authorization policy name, containing up to 128 characters.
            /// </remarks>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object PolicyName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Specifies the authorization policy description, containing up to 1024 characters.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Description
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPoliciesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PoliciesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPoliciesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: policyDocument: A policy document that describes what actions are allowed on which resources.
                /// </remarks>
                [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PolicyDocumentProperty\"}]}}")]
                public object PolicyDocument
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: policyName: Specifies the authorization policy name, containing up to 128 characters.
                /// </remarks>
                [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object PolicyName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: description: Specifies the authorization policy description, containing up to 1024 characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Description
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRole.PoliciesProperty")]
        public class PoliciesProperty : AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPoliciesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: policyDocument: A policy document that describes what actions are allowed on which resources.
            /// </remarks>
            [JsiiProperty(name: "policyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PolicyDocumentProperty\"}]}}")]
            public object PolicyDocument
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: Specifies the authorization policy name, containing up to 128 characters.
            /// </remarks>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Specifies the authorization policy description, containing up to 1024 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPolicyAttachmentsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PolicyAttachmentsProperty")]
        public interface IPolicyAttachmentsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: custom: undefined
            /// </remarks>
            [JsiiProperty(name: "custom", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Custom
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: system: undefined
            /// </remarks>
            [JsiiProperty(name: "system", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? System
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPolicyAttachmentsProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PolicyAttachmentsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPolicyAttachmentsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: custom: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "custom", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Custom
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: system: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "system", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? System
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRole.PolicyAttachmentsProperty")]
        public class PolicyAttachmentsProperty : AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPolicyAttachmentsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: custom: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "custom", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Custom
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: system: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "system", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? System
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPolicyDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PolicyDocumentProperty")]
        public interface IPolicyDocumentProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: statement: A policy consists of one or more statements.
            /// </remarks>
            [JsiiProperty(name: "statement", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PolicyDocumentStatementProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Statement
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: version: You can use versions to track changes to a managed policy.
            /// </remarks>
            [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Version
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPolicyDocumentProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PolicyDocumentProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPolicyDocumentProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: statement: A policy consists of one or more statements.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "statement", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PolicyDocumentStatementProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Statement
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: version: You can use versions to track changes to a managed policy.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Version
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRole.PolicyDocumentProperty")]
        public class PolicyDocumentProperty : AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPolicyDocumentProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: statement: A policy consists of one or more statements.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "statement", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PolicyDocumentStatementProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Statement
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: version: You can use versions to track changes to a managed policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Version
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPolicyDocumentStatementProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PolicyDocumentStatementProperty")]
        public interface IPolicyDocumentStatementProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: action: What actions you will allow.
            /// </remarks>
            [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Action
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: condition: What conditions should be satisfied.
            /// </remarks>
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Condition
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: effect: What the effect will be when the user requests access-either allow or deny.
            /// </remarks>
            [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Effect
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: resource: Which resources you allow the action on.
            /// </remarks>
            [JsiiProperty(name: "resource", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Resource
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPolicyDocumentStatementProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PolicyDocumentStatementProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPolicyDocumentStatementProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: action: What actions you will allow.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Action
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: condition: What conditions should be satisfied.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
                public object? Condition
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: effect: What the effect will be when the user requests access-either allow or deny.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Effect
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: resource: Which resources you allow the action on.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "resource", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Resource
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRole.PolicyDocumentStatementProperty")]
        public class PolicyDocumentStatementProperty : AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPolicyDocumentStatementProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: action: What actions you will allow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Action
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: condition: What conditions should be satisfied.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Condition
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: effect: What the effect will be when the user requests access-either allow or deny.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Effect
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: resource: Which resources you allow the action on.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resource", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Resource
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPrincipalProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PrincipalProperty")]
        public interface IPrincipalProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: federated: undefined
            /// </remarks>
            [JsiiProperty(name: "federated", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Federated
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ram: undefined
            /// </remarks>
            [JsiiProperty(name: "ram", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Ram
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: service: undefined
            /// </remarks>
            [JsiiProperty(name: "service", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Service
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPrincipalProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.PrincipalProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPrincipalProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: federated: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "federated", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Federated
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ram: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ram", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Ram
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: service: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "service", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Service
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRole.PrincipalProperty")]
        public class PrincipalProperty : AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IPrincipalProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: federated: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "federated", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Federated
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ram: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ram", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ram
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: service: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "service", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Service
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IStatementProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.StatementProperty")]
        public interface IStatementProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: action: What action you will allow.
            /// </remarks>
            [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Action
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: condition: undefined
            /// </remarks>
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.ConditionProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Condition
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: effect: What the effect will be when the user requests access-either allow or deny.
            /// </remarks>
            [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Effect
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: principal: undefined
            /// </remarks>
            [JsiiProperty(name: "principal", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PrincipalProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Principal
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IStatementProperty), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRole.StatementProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IStatementProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: action: What action you will allow.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Action
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: condition: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.ConditionProperty\"}]}}", isOptional: true)]
                public object? Condition
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: effect: What the effect will be when the user requests access-either allow or deny.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Effect
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: principal: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "principal", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PrincipalProperty\"}]}}", isOptional: true)]
                public object? Principal
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosRole.StatementProperty")]
        public class StatementProperty : AlibabaCloud.SDK.ROS.CDK.Ram.RosRole.IStatementProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: action: What action you will allow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "action", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Action
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: condition: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "condition", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.ConditionProperty\"}]}}", isOptional: true)]
            public object? Condition
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: effect: What the effect will be when the user requests access-either allow or deny.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "effect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Effect
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: principal: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "principal", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PrincipalProperty\"}]}}", isOptional: true)]
            public object? Principal
            {
                get;
                set;
            }
        }
    }
}
