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
        public RosParameter(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IRosParameterProps? props = null): base(new DeputyProps(new object?[]{scope, id, props}))
        {
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

        [JsiiProperty(name: "ASSOCIATION_PROPERTY_ALLOWED_VALUES", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        public static string[] ASSOCIATION_PROPERTY_ALLOWED_VALUES
        {
            get;
        }
        = GetStaticProperty<string[]>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter))!;

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
            public AssociationProperty(): base(new DeputyProps(System.Array.Empty<object?>()))
            {
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

            [JsiiProperty(name: "IMAGE_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string IMAGE_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "VPC_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string VPC_ID
            {
                get;
            }
            = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosParameter.AssociationProperty))!;

            [JsiiProperty(name: "VSWITCH_ID", typeJson: "{\"primitive\":\"string\"}")]
            public static string VSWITCH_ID
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
