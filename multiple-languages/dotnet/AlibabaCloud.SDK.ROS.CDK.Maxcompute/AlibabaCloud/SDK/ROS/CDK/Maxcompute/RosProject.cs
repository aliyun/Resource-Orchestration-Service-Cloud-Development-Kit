using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Maxcompute
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Project`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosProject", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProjectProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosProject : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosProject(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRosProjectProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRosProjectProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosProject(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosProject(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Name: The name of the project.
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
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
        /// <strong>Property</strong>: name: The name of the project.
        /// It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Name
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: Quota payment type, support PayAsYouGo, Subscription.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ChargeType
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: comment: The comments of project.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Comment
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultQuota: Default Computing Resource Group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DefaultQuota
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipWhiteList: IP whitelist.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipWhiteList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProject.IpWhiteListProperty\"}]}}", isOptional: true)]
        public virtual object? IpWhiteList
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IIpWhiteListProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IIpWhiteListProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: properties: Project base attributes.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "properties", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProject.PropertiesProperty\"}]}}", isOptional: true)]
        public virtual object? Properties
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IPropertiesProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IPropertiesProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(IEncryptionProperty), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosProject.EncryptionProperty")]
        public interface IEncryptionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: algorithm: Encryption Algorithm.
            /// </remarks>
            [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Algorithm
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: enable: Whether to open encryption.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Enable
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: key: Encryption algorithm key.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Key
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IEncryptionProperty), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosProject.EncryptionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IEncryptionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: algorithm: Encryption Algorithm.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Algorithm
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: enable: Whether to open encryption.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Enable
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: key: Encryption algorithm key.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Key
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-maxcompute.RosProject.EncryptionProperty")]
        public class EncryptionProperty : AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IEncryptionProperty
        {
            private object? _algorithm;

            /// <remarks>
            /// <strong>Property</strong>: algorithm: Encryption Algorithm.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Algorithm
            {
                get => _algorithm;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _algorithm = value;
                }
            }

            private object? _enable;

            /// <remarks>
            /// <strong>Property</strong>: enable: Whether to open encryption.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => _enable;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _enable = value;
                }
            }

            private object? _key;

            /// <remarks>
            /// <strong>Property</strong>: key: Encryption algorithm key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get => _key;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _key = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IIpWhiteListProperty), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosProject.IpWhiteListProperty")]
        public interface IIpWhiteListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ipList: Classic network IP white list. Separate multiple items with commas.
            /// </remarks>
            [JsiiProperty(name: "ipList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IpList
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcIpList: VPC network whitelist. Separate multiple items with commas.
            /// </remarks>
            [JsiiProperty(name: "vpcIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? VpcIpList
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IIpWhiteListProperty), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosProject.IpWhiteListProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IIpWhiteListProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ipList: Classic network IP white list. Separate multiple items with commas.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpList
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: vpcIpList: VPC network whitelist. Separate multiple items with commas.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "vpcIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? VpcIpList
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-maxcompute.RosProject.IpWhiteListProperty")]
        public class IpWhiteListProperty : AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IIpWhiteListProperty
        {
            private object? _ipList;

            /// <remarks>
            /// <strong>Property</strong>: ipList: Classic network IP white list. Separate multiple items with commas.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpList
            {
                get => _ipList;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _ipList = value;
                }
            }

            private object? _vpcIpList;

            /// <remarks>
            /// <strong>Property</strong>: vpcIpList: VPC network whitelist. Separate multiple items with commas.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcIpList
            {
                get => _vpcIpList;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _vpcIpList = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IPropertiesProperty), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosProject.PropertiesProperty")]
        public interface IPropertiesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: allowFullScan: Whether to allow full table scan.
            /// </remarks>
            [JsiiProperty(name: "allowFullScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? AllowFullScan
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: enableDecimal2: Whether to turn on Decimal2.0.
            /// </remarks>
            [JsiiProperty(name: "enableDecimal2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnableDecimal2
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: encryption: Whether encryption is turned on.
            /// </remarks>
            [JsiiProperty(name: "encryption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProject.EncryptionProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Encryption
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: retentionDays: Job default retention time.
            /// </remarks>
            [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RetentionDays
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sqlMeteringMax: SQL charge limit.
            /// </remarks>
            [JsiiProperty(name: "sqlMeteringMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SqlMeteringMax
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: typeSystem: Type system.
            /// </remarks>
            [JsiiProperty(name: "typeSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TypeSystem
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPropertiesProperty), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RosProject.PropertiesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IPropertiesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: allowFullScan: Whether to allow full table scan.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "allowFullScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? AllowFullScan
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: enableDecimal2: Whether to turn on Decimal2.0.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableDecimal2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EnableDecimal2
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: encryption: Whether encryption is turned on.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "encryption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProject.EncryptionProperty\"}]}}", isOptional: true)]
                public object? Encryption
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: retentionDays: Job default retention time.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RetentionDays
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sqlMeteringMax: SQL charge limit.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sqlMeteringMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SqlMeteringMax
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: typeSystem: Type system.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "typeSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TypeSystem
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-maxcompute.RosProject.PropertiesProperty")]
        public class PropertiesProperty : AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IPropertiesProperty
        {
            private object? _allowFullScan;

            /// <remarks>
            /// <strong>Property</strong>: allowFullScan: Whether to allow full table scan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowFullScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowFullScan
            {
                get => _allowFullScan;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _allowFullScan = value;
                }
            }

            private object? _enableDecimal2;

            /// <remarks>
            /// <strong>Property</strong>: enableDecimal2: Whether to turn on Decimal2.0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableDecimal2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableDecimal2
            {
                get => _enableDecimal2;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _enableDecimal2 = value;
                }
            }

            private object? _encryption;

            /// <remarks>
            /// <strong>Property</strong>: encryption: Whether encryption is turned on.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryption", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosProject.EncryptionProperty\"}]}}", isOptional: true)]
            public object? Encryption
            {
                get => _encryption;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IEncryptionProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Maxcompute.RosProject.IEncryptionProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _encryption = value;
                }
            }

            private object? _retentionDays;

            /// <remarks>
            /// <strong>Property</strong>: retentionDays: Job default retention time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "retentionDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RetentionDays
            {
                get => _retentionDays;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _retentionDays = value;
                }
            }

            private object? _sqlMeteringMax;

            /// <remarks>
            /// <strong>Property</strong>: sqlMeteringMax: SQL charge limit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sqlMeteringMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SqlMeteringMax
            {
                get => _sqlMeteringMax;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _sqlMeteringMax = value;
                }
            }

            private object? _typeSystem;

            /// <remarks>
            /// <strong>Property</strong>: typeSystem: Type system.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "typeSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TypeSystem
            {
                get => _typeSystem;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _typeSystem = value;
                }
            }
        }
    }
}
