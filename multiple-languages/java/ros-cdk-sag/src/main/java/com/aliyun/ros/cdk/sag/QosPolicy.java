package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  <code>ALIYUN::SAG::QosPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.313Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.QosPolicy")
public class QosPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected QosPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected QosPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::SAG::QosPolicy</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public QosPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.QosPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::SAG::QosPolicy</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public QosPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.QosPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute QosPolicyId: The ID of the traffic classification rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQosPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrQosPolicyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.QosPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.QosPolicy> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sag.QosPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.QosPolicyProps.Builder();
        }

        /**
         * Property destCidr: The range of the destination IP addresses.
         * <p>
         * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
         * <p>
         * @return {@code this}
         * @param destCidr Property destCidr: The range of the destination IP addresses. This parameter is required.
         */
        public Builder destCidr(final java.lang.String destCidr) {
            this.props.destCidr(destCidr);
            return this;
        }
        /**
         * Property destCidr: The range of the destination IP addresses.
         * <p>
         * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
         * <p>
         * @return {@code this}
         * @param destCidr Property destCidr: The range of the destination IP addresses. This parameter is required.
         */
        public Builder destCidr(final com.aliyun.ros.cdk.core.IResolvable destCidr) {
            this.props.destCidr(destCidr);
            return this;
        }

        /**
         * Property destPortRange: The range of destination ports.
         * <p>
         * Valid values: 1 to 65535 and -1.
         * Set this parameter in one of the following formats:
         * 1/200: a port range from 1 to 200
         * 80/80: port 80
         * -1/-1: all ports
         * <p>
         * @return {@code this}
         * @param destPortRange Property destPortRange: The range of destination ports. This parameter is required.
         */
        public Builder destPortRange(final java.lang.String destPortRange) {
            this.props.destPortRange(destPortRange);
            return this;
        }
        /**
         * Property destPortRange: The range of destination ports.
         * <p>
         * Valid values: 1 to 65535 and -1.
         * Set this parameter in one of the following formats:
         * 1/200: a port range from 1 to 200
         * 80/80: port 80
         * -1/-1: all ports
         * <p>
         * @return {@code this}
         * @param destPortRange Property destPortRange: The range of destination ports. This parameter is required.
         */
        public Builder destPortRange(final com.aliyun.ros.cdk.core.IResolvable destPortRange) {
            this.props.destPortRange(destPortRange);
            return this;
        }

        /**
         * Property ipProtocol: The type of the protocol that applies to the traffic classification rule.
         * <p>
         * The supported protocols provided in this topic are for reference only. The actual
         * protocols in the console shall prevail.
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: The type of the protocol that applies to the traffic classification rule. This parameter is required.
         */
        public Builder ipProtocol(final java.lang.String ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }
        /**
         * Property ipProtocol: The type of the protocol that applies to the traffic classification rule.
         * <p>
         * The supported protocols provided in this topic are for reference only. The actual
         * protocols in the console shall prevail.
         * <p>
         * @return {@code this}
         * @param ipProtocol Property ipProtocol: The type of the protocol that applies to the traffic classification rule. This parameter is required.
         */
        public Builder ipProtocol(final com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.props.ipProtocol(ipProtocol);
            return this;
        }

        /**
         * Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property qosId: The ID of the QoS policy.
         * <p>
         * @return {@code this}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         */
        public Builder qosId(final java.lang.String qosId) {
            this.props.qosId(qosId);
            return this;
        }
        /**
         * Property qosId: The ID of the QoS policy.
         * <p>
         * @return {@code this}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         */
        public Builder qosId(final com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.props.qosId(qosId);
            return this;
        }

        /**
         * Property sourceCidr: The range of the source IP addresses.
         * <p>
         * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
         * <p>
         * @return {@code this}
         * @param sourceCidr Property sourceCidr: The range of the source IP addresses. This parameter is required.
         */
        public Builder sourceCidr(final java.lang.String sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }
        /**
         * Property sourceCidr: The range of the source IP addresses.
         * <p>
         * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
         * <p>
         * @return {@code this}
         * @param sourceCidr Property sourceCidr: The range of the source IP addresses. This parameter is required.
         */
        public Builder sourceCidr(final com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.props.sourceCidr(sourceCidr);
            return this;
        }

        /**
         * Property sourcePortRange: The range of source ports.
         * <p>
         * Valid values: 1 to 65535 and -1.
         * Set this parameter in one of the following formats:
         * 1/200: a port range from 1 to 200
         * 80/80: port 80
         * -1/-1: all ports
         * <p>
         * @return {@code this}
         * @param sourcePortRange Property sourcePortRange: The range of source ports. This parameter is required.
         */
        public Builder sourcePortRange(final java.lang.String sourcePortRange) {
            this.props.sourcePortRange(sourcePortRange);
            return this;
        }
        /**
         * Property sourcePortRange: The range of source ports.
         * <p>
         * Valid values: 1 to 65535 and -1.
         * Set this parameter in one of the following formats:
         * 1/200: a port range from 1 to 200
         * 80/80: port 80
         * -1/-1: all ports
         * <p>
         * @return {@code this}
         * @param sourcePortRange Property sourcePortRange: The range of source ports. This parameter is required.
         */
        public Builder sourcePortRange(final com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
            this.props.sourcePortRange(sourcePortRange);
            return this;
        }

        /**
         * Property description: The description of the traffic classification rule.
         * <p>
         * The description must be 1 to 512 characters in length and can contain letters, digits,
         * underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the traffic classification rule. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the traffic classification rule.
         * <p>
         * The description must be 1 to 512 characters in length and can contain letters, digits,
         * underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the traffic classification rule. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property dpiGroupIds: The ID of the application group.
         * <p>
         * You can enter at most 100 application group IDs at a time.
         * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
         * <p>
         * @return {@code this}
         * @param dpiGroupIds Property dpiGroupIds: The ID of the application group. This parameter is required.
         */
        public Builder dpiGroupIds(final com.aliyun.ros.cdk.core.IResolvable dpiGroupIds) {
            this.props.dpiGroupIds(dpiGroupIds);
            return this;
        }
        /**
         * Property dpiGroupIds: The ID of the application group.
         * <p>
         * You can enter at most 100 application group IDs at a time.
         * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
         * <p>
         * @return {@code this}
         * @param dpiGroupIds Property dpiGroupIds: The ID of the application group. This parameter is required.
         */
        public Builder dpiGroupIds(final java.util.List<? extends java.lang.Object> dpiGroupIds) {
            this.props.dpiGroupIds(dpiGroupIds);
            return this;
        }

        /**
         * Property dpiSignatureIds: The ID of the application.
         * <p>
         * You can enter at most 100 application IDs at a time.
         * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
         * <p>
         * @return {@code this}
         * @param dpiSignatureIds Property dpiSignatureIds: The ID of the application. This parameter is required.
         */
        public Builder dpiSignatureIds(final com.aliyun.ros.cdk.core.IResolvable dpiSignatureIds) {
            this.props.dpiSignatureIds(dpiSignatureIds);
            return this;
        }
        /**
         * Property dpiSignatureIds: The ID of the application.
         * <p>
         * You can enter at most 100 application IDs at a time.
         * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
         * <p>
         * @return {@code this}
         * @param dpiSignatureIds Property dpiSignatureIds: The ID of the application. This parameter is required.
         */
        public Builder dpiSignatureIds(final java.util.List<? extends java.lang.Object> dpiSignatureIds) {
            this.props.dpiSignatureIds(dpiSignatureIds);
            return this;
        }

        /**
         * Property endTime: The time when the traffic classification rule becomes invalid.
         * <p>
         * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
         * The time must be in UTC+8.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the traffic classification rule becomes invalid. This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * Property endTime: The time when the traffic classification rule becomes invalid.
         * <p>
         * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
         * The time must be in UTC+8.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the traffic classification rule becomes invalid. This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * Property name: The name of the traffic classification rule.
         * <p>
         * The name must be 2 to 100 characters in length, and can contain digits, underscores
         * (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the traffic classification rule. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the traffic classification rule.
         * <p>
         * The name must be 2 to 100 characters in length, and can contain digits, underscores
         * (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the traffic classification rule. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property startTime: The time when the traffic classification rule takes effect.
         * <p>
         * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
         * The time must be in UTC+8.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The time when the traffic classification rule takes effect. This parameter is required.
         */
        public Builder startTime(final java.lang.String startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * Property startTime: The time when the traffic classification rule takes effect.
         * <p>
         * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
         * The time must be in UTC+8.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The time when the traffic classification rule takes effect. This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sag.QosPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.QosPolicy build() {
            return new com.aliyun.ros.cdk.sag.QosPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
