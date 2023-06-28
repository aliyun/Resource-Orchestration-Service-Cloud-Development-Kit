using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>A ROS parameter.</summary>
    /// <remarks>
    /// Parameters enable you to input custom values to your template each time you create or
    /// update a stack.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter), fullyQualifiedName: "@alicloud/ros-cdk-core.RosParameter", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosParameterProps\"}}]")]
    public class RosParameter : AlibabaCloud.SDK.ROS.CDK.Core.RosElement
    {
        public RosParameter(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IRosParameterProps? props = null): base(_MakeDeputyProps(scope, id, props))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IRosParameterProps? props = null)
        {
            return new DeputyProps(new object?[]{scope, id, props});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosParameter(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosParameter(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"_context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        public virtual object Resolve(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{context})!;
        }

        [JsiiMethod(name: "validateProperties", parametersJson: "[{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosParameterProps\"}}]")]
        public virtual void ValidateProperties(AlibabaCloud.SDK.ROS.CDK.Core.IRosParameterProps? props = null)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosParameterProps)}, new object?[]{props});
        }

        [JsiiProperty(name: "TYPE_ALLOWED_VALUES", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        public static string[] TYPE_ALLOWED_VALUES
        {
            get;
        }
        = GetStaticProperty<string[]>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter))!;

        /// <summary>Indicates if this parameter is configured with "NoEcho" enabled.</summary>
        [JsiiProperty(name: "noEcho", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool NoEcho
        {
            get => GetInstanceProperty<bool>()!;
        }

        /// <summary>The parameter value as a Token.</summary>
        [JsiiProperty(name: "value", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable Value
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>The parameter value, if it represents a string.</summary>
        [JsiiProperty(name: "valueAsAny", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object ValueAsAny
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>The parameter value, if it represents a string.</summary>
        [JsiiProperty(name: "valueAsBoolean", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object ValueAsBoolean
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>The parameter value, if it represents a string list.</summary>
        [JsiiProperty(name: "valueAsList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        public virtual string[] ValueAsList
        {
            get => GetInstanceProperty<string[]>()!;
        }

        /// <summary>The parameter value, if it represents a number.</summary>
        [JsiiProperty(name: "valueAsNumber", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double ValueAsNumber
        {
            get => GetInstanceProperty<double>()!;
        }

        /// <summary>The parameter value, if it represents a string.</summary>
        [JsiiProperty(name: "valueAsString", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ValueAsString
        {
            get => GetInstanceProperty<string>()!;
        }
        [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty), fullyQualifiedName: "@alicloud/ros-cdk-core.RosParameter.AssociationProperty")]
        public class AssociationProperty : DeputyBase
        {
            public AssociationProperty(): base(_MakeDeputyProps())
            {
            }

            [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
            private static DeputyProps _MakeDeputyProps()
            {
                return new DeputyProps(System.Array.Empty<object?>());
            }

            /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
            /// <param name="reference">The Javascript-owned object reference</param>
            [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
            protected AssociationProperty(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
            /// <param name="props">The deputy props</param>
            [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
            protected AssociationProperty(DeputyProps props): base(props)
            {
            }

            [JsiiProperty(name: "ALB_ACL_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ALB_ACL_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ALB_INSTANCE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ALB_INSTANCE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ALB_LOAD_BALANCER_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ALB_LOAD_BALANCER_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ALERT", typeJson: "{\"primitive\":\"string\"}")]
            public static string ALERT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ARRAY_ITEMS", typeJson: "{\"primitive\":\"string\"}")]
            public static string ARRAY_ITEMS
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ARRAY_TABLE", typeJson: "{\"primitive\":\"string\"}")]
            public static string ARRAY_TABLE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "BOOLEAN", typeJson: "{\"primitive\":\"string\"}")]
            public static string BOOLEAN
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CAS_CERTIFICATE", typeJson: "{\"primitive\":\"string\"}")]
            public static string CAS_CERTIFICATE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CAS_CERTIFICATE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string CAS_CERTIFICATE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CASCADER", typeJson: "{\"primitive\":\"string\"}")]
            public static string CASCADER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CHARGE_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string CHARGE_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CMS_ALARM_RULE", typeJson: "{\"primitive\":\"string\"}")]
            public static string CMS_ALARM_RULE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CMS_ALARM_SILENCE_TIME", typeJson: "{\"primitive\":\"string\"}")]
            public static string CMS_ALARM_SILENCE_TIME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CMS_ALARM_TRIGGER_RESOURCES", typeJson: "{\"primitive\":\"string\"}")]
            public static string CMS_ALARM_TRIGGER_RESOURCES
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CMS_EVENT_FILTER_RULE", typeJson: "{\"primitive\":\"string\"}")]
            public static string CMS_EVENT_FILTER_RULE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CMS_EVENT_LEVEL", typeJson: "{\"primitive\":\"string\"}")]
            public static string CMS_EVENT_LEVEL
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CMS_EVENT_NAME", typeJson: "{\"primitive\":\"string\"}")]
            public static string CMS_EVENT_NAME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CMS_PRODUCT_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string CMS_PRODUCT_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CODE", typeJson: "{\"primitive\":\"string\"}")]
            public static string CODE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "COMMA_DELIMITED_LIST", typeJson: "{\"primitive\":\"string\"}")]
            public static string COMMA_DELIMITED_LIST
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "COMPUTER_NEST_SERVICE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string COMPUTER_NEST_SERVICE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "COMPUTER_NEST_SERVICE_INSTANCE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string COMPUTER_NEST_SERVICE_INSTANCE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "COMPUTER_NEST_SUPPLIER_SERVICE_VERSION", typeJson: "{\"primitive\":\"string\"}")]
            public static string COMPUTER_NEST_SUPPLIER_SERVICE_VERSION
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CRON", typeJson: "{\"primitive\":\"string\"}")]
            public static string CRON
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CS_CLUSTER_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string CS_CLUSTER_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "CS_CLUSTER_NODE_POOL", typeJson: "{\"primitive\":\"string\"}")]
            public static string CS_CLUSTER_NODE_POOL
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "DATE_PICKER", typeJson: "{\"primitive\":\"string\"}")]
            public static string DATE_PICKER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "DATE_TIME", typeJson: "{\"primitive\":\"string\"}")]
            public static string DATE_TIME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_AUTO_SNAPSHOT_POLICY_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_AUTO_SNAPSHOT_POLICY_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_COMMAND_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_COMMAND_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_DATA_DISK_CATEGORY", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_DATA_DISK_CATEGORY
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_DISK_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_DISK_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_IMAGE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_IMAGE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_ATTRIBUTE_SELECTOR", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_ATTRIBUTE_SELECTOR
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_IMAGE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_IMAGE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_MAX_BANDWIDTH_IN", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_MAX_BANDWIDTH_IN
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_PASSWORD", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_PASSWORD
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_PROPERTY_EDITOR", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_PROPERTY_EDITOR
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_RENEW_PERIOD", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_RENEW_PERIOD
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_STOP_MODE", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_STOP_MODE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_TYPE_AVAILABLE_INSTANCE_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_INSTANCE_ZONE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_INSTANCE_ZONE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_KEY_PAIR_NAME", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_KEY_PAIR_NAME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_LAUNCH_TEMPLATE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_LAUNCH_TEMPLATE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_LAUNCH_TEMPLATE_VERSION", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_LAUNCH_TEMPLATE_VERSION
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_MANAGED_INSTANCE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_MANAGED_INSTANCE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_RAM_ROLE", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_RAM_ROLE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_REGION_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_REGION_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_RESOURCE_GROUP_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_RESOURCE_GROUP_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_SECURITY_GROUP_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_SECURITY_GROUP_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_SNAPSHOT_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_SNAPSHOT_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_SYSTEM_DISK_CATEGORY", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_SYSTEM_DISK_CATEGORY
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_TAG", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_TAG
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_TARGET_REGION_IDS", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_TARGET_REGION_IDS
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_VPC_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_VPC_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_VSWITCH", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_VSWITCH
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_VSWITCH_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_VSWITCH_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ECS_ZONE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ECS_ZONE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "EDITABLE", typeJson: "{\"primitive\":\"string\"}")]
            public static string EDITABLE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "EDITABLE_POPOVER", typeJson: "{\"primitive\":\"string\"}")]
            public static string EDITABLE_POPOVER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "EHPC_CLUSTER_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string EHPC_CLUSTER_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "EHPC_FILE_SYSTEM_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string EHPC_FILE_SYSTEM_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN", typeJson: "{\"primitive\":\"string\"}")]
            public static string EHPC_FILE_SYSTEM_MOUNT_TARGET_DOMAIN
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ELASTICSEARCH_INSTANCE_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string ELASTICSEARCH_INSTANCE_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ESS_AUTO_SCALING_GROUP_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ESS_AUTO_SCALING_GROUP_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ESS_SCALING_CONFIGURATION_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ESS_SCALING_CONFIGURATION_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "FILE_CONTENT", typeJson: "{\"primitive\":\"string\"}")]
            public static string FILE_CONTENT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "FORM_GRID", typeJson: "{\"primitive\":\"string\"}")]
            public static string FORM_GRID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "FORM_GROUP_COLLAPSE_PAN", typeJson: "{\"primitive\":\"string\"}")]
            public static string FORM_GROUP_COLLAPSE_PAN
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "FORM_ITEM", typeJson: "{\"primitive\":\"string\"}")]
            public static string FORM_ITEM
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "FORM_ITEM_GROUP", typeJson: "{\"primitive\":\"string\"}")]
            public static string FORM_ITEM_GROUP
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "FORM_LAYOUT", typeJson: "{\"primitive\":\"string\"}")]
            public static string FORM_LAYOUT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "GMT_ZONE", typeJson: "{\"primitive\":\"string\"}")]
            public static string GMT_ZONE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "INFLUX_DB_INSTANCE_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string INFLUX_DB_INSTANCE_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "INPUT", typeJson: "{\"primitive\":\"string\"}")]
            public static string INPUT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "INTEGER", typeJson: "{\"primitive\":\"string\"}")]
            public static string INTEGER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "JSON", typeJson: "{\"primitive\":\"string\"}")]
            public static string JSON
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "LIST", typeJson: "{\"primitive\":\"string\"}")]
            public static string LIST
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "LIST_PARAMETER", typeJson: "{\"primitive\":\"string\"}")]
            public static string LIST_PARAMETER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "LIST_PARAMETERS", typeJson: "{\"primitive\":\"string\"}")]
            public static string LIST_PARAMETERS
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "MONGODB_INSTANCE_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string MONGODB_INSTANCE_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "NEST_SERVICE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string NEST_SERVICE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "NEST_SERVICE_VERSION", typeJson: "{\"primitive\":\"string\"}")]
            public static string NEST_SERVICE_VERSION
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "NLB_INSTANCE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string NLB_INSTANCE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "NLB_LOAD_BALANCER_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string NLB_LOAD_BALANCER_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "NLB_ZONE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string NLB_ZONE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "NUMBER", typeJson: "{\"primitive\":\"string\"}")]
            public static string NUMBER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "NUMBER_PICKER", typeJson: "{\"primitive\":\"string\"}")]
            public static string NUMBER_PICKER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMMAND_CONTENT", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMMAND_CONTENT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_BANDWIDTH_UPGRADE_DURATION_HOUR
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_CLEAN_UP_INFO", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_CLEAN_UP_INFO
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_ON_OFF_TIME_LINE", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_ON_OFF_TIME_LINE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_ON_OFF_TIMES", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_ON_OFF_TIMES
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_OPERATION_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_OPERATION_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_PRIVATE_TEMPLATE_NAME", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_PRIVATE_TEMPLATE_NAME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_SECTION_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_SECTION_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_TARGET_IMAGE_NAME", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_TARGET_IMAGE_NAME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_TIMER_TRIGGER", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_TIMER_TRIGGER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_COMPONENT_TRANSIT_INSTANCE", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_COMPONENT_TRANSIT_INSTANCE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_FILE_URL", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_FILE_URL
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_PACKAGE_NAME", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_PACKAGE_NAME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_PACKAGE_VERSION", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_PACKAGE_VERSION
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_PARAMETER_VALUE", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_PARAMETER_VALUE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_SECRET_PARAMETER_VALUE", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_SECRET_PARAMETER_VALUE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_SERVICE_ROLE", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_SERVICE_ROLE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_TEMPLATE_NAME", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_TEMPLATE_NAME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OOS_TEMPLATE_VERSION", typeJson: "{\"primitive\":\"string\"}")]
            public static string OOS_TEMPLATE_VERSION
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OSS_BUCKET_NAME", typeJson: "{\"primitive\":\"string\"}")]
            public static string OSS_BUCKET_NAME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OSS_BUCKET_OBJECT", typeJson: "{\"primitive\":\"string\"}")]
            public static string OSS_BUCKET_OBJECT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "OSS_OBJECT_NAME", typeJson: "{\"primitive\":\"string\"}")]
            public static string OSS_OBJECT_NAME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "PARSE_TEXT", typeJson: "{\"primitive\":\"string\"}")]
            public static string PARSE_TEXT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "PASSWORD", typeJson: "{\"primitive\":\"string\"}")]
            public static string PASSWORD
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "PAY_PERIOD", typeJson: "{\"primitive\":\"string\"}")]
            public static string PAY_PERIOD
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "PAY_PERIOD_UNIT", typeJson: "{\"primitive\":\"string\"}")]
            public static string PAY_PERIOD_UNIT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "POLARDB_DB_CLUSTER_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string POLARDB_DB_CLUSTER_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RADIO", typeJson: "{\"primitive\":\"string\"}")]
            public static string RADIO
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RAM_ROLE", typeJson: "{\"primitive\":\"string\"}")]
            public static string RAM_ROLE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RAM_USER", typeJson: "{\"primitive\":\"string\"}")]
            public static string RAM_USER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RATE_CONTROL", typeJson: "{\"primitive\":\"string\"}")]
            public static string RATE_CONTROL
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RDS_ENGINE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string RDS_ENGINE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RDS_ENGINE_VERSION", typeJson: "{\"primitive\":\"string\"}")]
            public static string RDS_ENGINE_VERSION
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RDS_INSTANCE_ACCOUNT_PASSWORD", typeJson: "{\"primitive\":\"string\"}")]
            public static string RDS_INSTANCE_ACCOUNT_PASSWORD
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RDS_INSTANCE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string RDS_INSTANCE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RDS_INSTANCE_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string RDS_INSTANCE_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "READ_ONLY", typeJson: "{\"primitive\":\"string\"}")]
            public static string READ_ONLY
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "READ_ONLY_ITEM", typeJson: "{\"primitive\":\"string\"}")]
            public static string READ_ONLY_ITEM
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "REDIS_INSTANCE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string REDIS_INSTANCE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "REDIS_INSTANCE_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string REDIS_INSTANCE_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "REGION_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string REGION_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RESOURCE_MANAGER_ACCOUNT", typeJson: "{\"primitive\":\"string\"}")]
            public static string RESOURCE_MANAGER_ACCOUNT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "RESOURCE_MANAGER_FOLDER", typeJson: "{\"primitive\":\"string\"}")]
            public static string RESOURCE_MANAGER_FOLDER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ROS_TYPE_META_LIST", typeJson: "{\"primitive\":\"string\"}")]
            public static string ROS_TYPE_META_LIST
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "SELECT", typeJson: "{\"primitive\":\"string\"}")]
            public static string SELECT
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string SERVICE_CATA_LOG_LAUNCH_OPTION_PORTFOLIO_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string SERVICE_CATA_LOG_LAUNCH_PRODUCT_VERSION_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "SLB_ACL_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string SLB_ACL_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "SLB_CERTIFICATE", typeJson: "{\"primitive\":\"string\"}")]
            public static string SLB_CERTIFICATE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "SLB_INSTANCE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string SLB_INSTANCE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "SLB_INSTANCE_TYPE", typeJson: "{\"primitive\":\"string\"}")]
            public static string SLB_INSTANCE_TYPE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "SLB_LOAD_BALANCER_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string SLB_LOAD_BALANCER_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "STRING", typeJson: "{\"primitive\":\"string\"}")]
            public static string STRING
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "SWITCH", typeJson: "{\"primitive\":\"string\"}")]
            public static string SWITCH
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "TAGS", typeJson: "{\"primitive\":\"string\"}")]
            public static string TAGS
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "TARGETS", typeJson: "{\"primitive\":\"string\"}")]
            public static string TARGETS
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "TEMPLATE_NAME", typeJson: "{\"primitive\":\"string\"}")]
            public static string TEMPLATE_NAME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "TEMPLATE_PARAMETER", typeJson: "{\"primitive\":\"string\"}")]
            public static string TEMPLATE_PARAMETER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "TEXT_AREA", typeJson: "{\"primitive\":\"string\"}")]
            public static string TEXT_AREA
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "TIME", typeJson: "{\"primitive\":\"string\"}")]
            public static string TIME
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "TIME_TRIGGER", typeJson: "{\"primitive\":\"string\"}")]
            public static string TIME_TRIGGER
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "TIME_TRIGGER_WEEKLY", typeJson: "{\"primitive\":\"string\"}")]
            public static string TIME_TRIGGER_WEEKLY
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "TIME_ZONE", typeJson: "{\"primitive\":\"string\"}")]
            public static string TIME_ZONE
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "USER_ACCOUNT_IDS", typeJson: "{\"primitive\":\"string\"}")]
            public static string USER_ACCOUNT_IDS
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "VPC_CIDR_BLOCK", typeJson: "{\"primitive\":\"string\"}")]
            public static string VPC_CIDR_BLOCK
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "VPC_NAT_GATEWAY_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string VPC_NAT_GATEWAY_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "VPC_ROUTER_ROUTE_TABLE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string VPC_ROUTER_ROUTE_TABLE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "VPC_VSWITCH_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string VPC_VSWITCH_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "VPC_ZONE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string VPC_ZONE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "VSWITCH_CIDR_BLOCK", typeJson: "{\"primitive\":\"string\"}")]
            public static string VSWITCH_CIDR_BLOCK
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "ZONE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string ZONE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;
        }
    }
}
