package com.aliyun.ros.cdk.cloudfw;

/**
 * A ROS resource type:  `ALIYUN::CLOUDFW::ControlPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:24.837Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.ControlPolicy")
public class ControlPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected ControlPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ControlPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CLOUDFW::ControlPolicy`.
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
    public ControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.ControlPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CLOUDFW::ControlPolicy`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.ControlPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AclUuid: Security access control ID that uniquely identifies the policy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrAclUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.ControlPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.ControlPolicy> {
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
        private final com.aliyun.ros.cdk.cloudfw.ControlPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.ControlPolicyProps.Builder();
        }

        /**
         * Property aclAction: Traffic access control policy set by the cloud of a firewall.
         * <p>
         * accept: Release
         * drop: rejected
         * log: Observation
         * <p>
         * @return {@code this}
         * @param aclAction Property aclAction: Traffic access control policy set by the cloud of a firewall. This parameter is required.
         */
        public Builder aclAction(final java.lang.String aclAction) {
            this.props.aclAction(aclAction);
            return this;
        }
        /**
         * Property aclAction: Traffic access control policy set by the cloud of a firewall.
         * <p>
         * accept: Release
         * drop: rejected
         * log: Observation
         * <p>
         * @return {@code this}
         * @param aclAction Property aclAction: Traffic access control policy set by the cloud of a firewall. This parameter is required.
         */
        public Builder aclAction(final com.aliyun.ros.cdk.core.IResolvable aclAction) {
            this.props.aclAction(aclAction);
            return this;
        }

        /**
         * Property applicationName: Application types supported by the security policy.
         * <p>
         * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
         * NOTE ANY indicates that the policy is applied to all types of applications.
         * <p>
         * @return {@code this}
         * @param applicationName Property applicationName: Application types supported by the security policy. This parameter is required.
         */
        public Builder applicationName(final java.lang.String applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }
        /**
         * Property applicationName: Application types supported by the security policy.
         * <p>
         * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
         * NOTE ANY indicates that the policy is applied to all types of applications.
         * <p>
         * @return {@code this}
         * @param applicationName Property applicationName: Application types supported by the security policy. This parameter is required.
         */
        public Builder applicationName(final com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }

        /**
         * Property description: Security access control policy description information.
         * <p>
         * @return {@code this}
         * @param description Property description: Security access control policy description information. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Security access control policy description information.
         * <p>
         * @return {@code this}
         * @param description Property description: Security access control policy description information. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property destination: Security Access Control destination address policy.
         * <p>
         * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
         * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
         * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
         * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
         * <p>
         * @return {@code this}
         * @param destination Property destination: Security Access Control destination address policy. This parameter is required.
         */
        public Builder destination(final java.lang.String destination) {
            this.props.destination(destination);
            return this;
        }
        /**
         * Property destination: Security Access Control destination address policy.
         * <p>
         * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
         * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
         * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
         * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
         * <p>
         * @return {@code this}
         * @param destination Property destination: Security Access Control destination address policy. This parameter is required.
         */
        public Builder destination(final com.aliyun.ros.cdk.core.IResolvable destination) {
            this.props.destination(destination);
            return this;
        }

        /**
         * Property destinationType: Security Access Control destination address type of policy.
         * <p>
         * net: Destination network segment (CIDR)
         * group: destination address book
         * domain: The purpose domain
         * location: The purpose area
         * <p>
         * @return {@code this}
         * @param destinationType Property destinationType: Security Access Control destination address type of policy. This parameter is required.
         */
        public Builder destinationType(final java.lang.String destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }
        /**
         * Property destinationType: Security Access Control destination address type of policy.
         * <p>
         * net: Destination network segment (CIDR)
         * group: destination address book
         * domain: The purpose domain
         * location: The purpose area
         * <p>
         * @return {@code this}
         * @param destinationType Property destinationType: Security Access Control destination address type of policy. This parameter is required.
         */
        public Builder destinationType(final com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }

        /**
         * Property direction: Security access control traffic direction policies.
         * <p>
         * in: internal and external traffic access control
         * out: within the flow of external access control
         * <p>
         * @return {@code this}
         * @param direction Property direction: Security access control traffic direction policies. This parameter is required.
         */
        public Builder direction(final java.lang.String direction) {
            this.props.direction(direction);
            return this;
        }
        /**
         * Property direction: Security access control traffic direction policies.
         * <p>
         * in: internal and external traffic access control
         * out: within the flow of external access control
         * <p>
         * @return {@code this}
         * @param direction Property direction: Security access control traffic direction policies. This parameter is required.
         */
        public Builder direction(final com.aliyun.ros.cdk.core.IResolvable direction) {
            this.props.direction(direction);
            return this;
        }

        /**
         * Property newOrder: Security access control priority policy in force.
         * <p>
         * Priority number increments sequentially from 1, lower the priority number, the higher the priority.
         * Description -1 indicates the lowest priority.
         * <p>
         * @return {@code this}
         * @param newOrder Property newOrder: Security access control priority policy in force. This parameter is required.
         */
        public Builder newOrder(final java.lang.Number newOrder) {
            this.props.newOrder(newOrder);
            return this;
        }
        /**
         * Property newOrder: Security access control priority policy in force.
         * <p>
         * Priority number increments sequentially from 1, lower the priority number, the higher the priority.
         * Description -1 indicates the lowest priority.
         * <p>
         * @return {@code this}
         * @param newOrder Property newOrder: Security access control priority policy in force. This parameter is required.
         */
        public Builder newOrder(final com.aliyun.ros.cdk.core.IResolvable newOrder) {
            this.props.newOrder(newOrder);
            return this;
        }

        /**
         * Property proto: The type of security protocol for traffic access in the security access control policy.
         * <p>
         * Can be set to ANY when you are not sure of the specific protocol type.
         * Allowed values: ANY, TCP, UDP, ICMP
         * <p>
         * @return {@code this}
         * @param proto Property proto: The type of security protocol for traffic access in the security access control policy. This parameter is required.
         */
        public Builder proto(final java.lang.String proto) {
            this.props.proto(proto);
            return this;
        }
        /**
         * Property proto: The type of security protocol for traffic access in the security access control policy.
         * <p>
         * Can be set to ANY when you are not sure of the specific protocol type.
         * Allowed values: ANY, TCP, UDP, ICMP
         * <p>
         * @return {@code this}
         * @param proto Property proto: The type of security protocol for traffic access in the security access control policy. This parameter is required.
         */
        public Builder proto(final com.aliyun.ros.cdk.core.IResolvable proto) {
            this.props.proto(proto);
            return this;
        }

        /**
         * Property source: Security access control source address policy.
         * <p>
         * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
         * When SourceType as a group, Source name for the source address book. For example: db_group
         * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
         * <p>
         * @return {@code this}
         * @param source Property source: Security access control source address policy. This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: Security access control source address policy.
         * <p>
         * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
         * When SourceType as a group, Source name for the source address book. For example: db_group
         * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
         * <p>
         * @return {@code this}
         * @param source Property source: Security access control source address policy. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * Property sourceType: Security access control source address type of policy.
         * <p>
         * net: Source segment (CIDR)
         * group: source address book
         * location: the source area
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Security access control source address type of policy. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: Security access control source address type of policy.
         * <p>
         * net: Source segment (CIDR)
         * group: source address book
         * location: the source area
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Security access control source address type of policy. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property destPort: Security access control policy access traffic destination port.
         * <p>
         * Note When DestPortType to port, set the item.
         * <p>
         * @return {@code this}
         * @param destPort Property destPort: Security access control policy access traffic destination port. This parameter is required.
         */
        public Builder destPort(final java.lang.String destPort) {
            this.props.destPort(destPort);
            return this;
        }
        /**
         * Property destPort: Security access control policy access traffic destination port.
         * <p>
         * Note When DestPortType to port, set the item.
         * <p>
         * @return {@code this}
         * @param destPort Property destPort: Security access control policy access traffic destination port. This parameter is required.
         */
        public Builder destPort(final com.aliyun.ros.cdk.core.IResolvable destPort) {
            this.props.destPort(destPort);
            return this;
        }

        /**
         * Property destPortGroup: Security access control policy access traffic destination port address book name.
         * <p>
         * Description DestPortType is group, set the item.
         * <p>
         * @return {@code this}
         * @param destPortGroup Property destPortGroup: Security access control policy access traffic destination port address book name. This parameter is required.
         */
        public Builder destPortGroup(final java.lang.String destPortGroup) {
            this.props.destPortGroup(destPortGroup);
            return this;
        }
        /**
         * Property destPortGroup: Security access control policy access traffic destination port address book name.
         * <p>
         * Description DestPortType is group, set the item.
         * <p>
         * @return {@code this}
         * @param destPortGroup Property destPortGroup: Security access control policy access traffic destination port address book name. This parameter is required.
         */
        public Builder destPortGroup(final com.aliyun.ros.cdk.core.IResolvable destPortGroup) {
            this.props.destPortGroup(destPortGroup);
            return this;
        }

        /**
         * Property destPortType: Security access control policy access destination port traffic type.
         * <p>
         * port: Port
         * group: port address book
         * <p>
         * @return {@code this}
         * @param destPortType Property destPortType: Security access control policy access destination port traffic type. This parameter is required.
         */
        public Builder destPortType(final java.lang.String destPortType) {
            this.props.destPortType(destPortType);
            return this;
        }
        /**
         * Property destPortType: Security access control policy access destination port traffic type.
         * <p>
         * port: Port
         * group: port address book
         * <p>
         * @return {@code this}
         * @param destPortType Property destPortType: Security access control policy access destination port traffic type. This parameter is required.
         */
        public Builder destPortType(final com.aliyun.ros.cdk.core.IResolvable destPortType) {
            this.props.destPortType(destPortType);
            return this;
        }

        /**
         * Property regionId: Region ID.
         * <p>
         * Default to cn-hangzhou.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID. This parameter is required.
         */
        public Builder regionId(final java.lang.String regionId) {
            this.props.regionId(regionId);
            return this;
        }
        /**
         * Property regionId: Region ID.
         * <p>
         * Default to cn-hangzhou.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID. This parameter is required.
         */
        public Builder regionId(final com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.props.regionId(regionId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.ControlPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.ControlPolicy build() {
            return new com.aliyun.ros.cdk.cloudfw.ControlPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
