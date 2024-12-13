package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::NatFirewallControlPolicy</code>, which is used to add an access control policy for a NAT firewall.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:05.393Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.NatFirewallControlPolicy")
public class NatFirewallControlPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected NatFirewallControlPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NatFirewallControlPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public NatFirewallControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public NatFirewallControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AclUuid: The unique ID of the access control policy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrAclUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Direction: The direction of the traffic to which the access control policy applies.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDirection() {
        return software.amazon.jsii.Kernel.get(this, "attrDirection", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NatGatewayId: The ID of the NAT gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNatGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicy> {
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
        private final com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicyProps.Builder();
        }

        /**
         * Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic.
         * <p>
         * @return {@code this}
         * @param aclAction Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic. This parameter is required.
         */
        public Builder aclAction(final java.lang.String aclAction) {
            this.props.aclAction(aclAction);
            return this;
        }
        /**
         * Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic.
         * <p>
         * @return {@code this}
         * @param aclAction Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic. This parameter is required.
         */
        public Builder aclAction(final com.aliyun.ros.cdk.core.IResolvable aclAction) {
            this.props.aclAction(aclAction);
            return this;
        }

        /**
         * Property applicationNameList: The application types supported by the access control policy.
         * <p>
         * @return {@code this}
         * @param applicationNameList Property applicationNameList: The application types supported by the access control policy. This parameter is required.
         */
        public Builder applicationNameList(final com.aliyun.ros.cdk.core.IResolvable applicationNameList) {
            this.props.applicationNameList(applicationNameList);
            return this;
        }
        /**
         * Property applicationNameList: The application types supported by the access control policy.
         * <p>
         * @return {@code this}
         * @param applicationNameList Property applicationNameList: The application types supported by the access control policy. This parameter is required.
         */
        public Builder applicationNameList(final java.util.List<? extends java.lang.Object> applicationNameList) {
            this.props.applicationNameList(applicationNameList);
            return this;
        }

        /**
         * Property description: The description of the access control policy.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the access control policy. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the access control policy.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the access control policy. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property destination: The destination address in the access control policy.
         * <p>
         * Valid values:
         * If DestinationType is set to net, the value of this parameter is a CIDR block.
         * Example: 1.2.XX.XX/24
         * If DestinationType is set to group, the value of this parameter is an address book.
         * Example: db_group
         * If DestinationType is set to domain, the value of this parameter is a domain name.
         * Example: *.aliyuncs.com
         * DestinationType is set to location, the value of this parameter is a location.
         * Example: ["BJ11", "ZB"]
         * <p>
         * @return {@code this}
         * @param destination Property destination: The destination address in the access control policy. This parameter is required.
         */
        public Builder destination(final java.lang.String destination) {
            this.props.destination(destination);
            return this;
        }
        /**
         * Property destination: The destination address in the access control policy.
         * <p>
         * Valid values:
         * If DestinationType is set to net, the value of this parameter is a CIDR block.
         * Example: 1.2.XX.XX/24
         * If DestinationType is set to group, the value of this parameter is an address book.
         * Example: db_group
         * If DestinationType is set to domain, the value of this parameter is a domain name.
         * Example: *.aliyuncs.com
         * DestinationType is set to location, the value of this parameter is a location.
         * Example: ["BJ11", "ZB"]
         * <p>
         * @return {@code this}
         * @param destination Property destination: The destination address in the access control policy. This parameter is required.
         */
        public Builder destination(final com.aliyun.ros.cdk.core.IResolvable destination) {
            this.props.destination(destination);
            return this;
        }

        /**
         * Property destinationType: The type of the destination address in the access control policy.
         * <p>
         * Valid values:
         * net: CIDR block
         * group: address book
         * domain: domain name
         * <p>
         * @return {@code this}
         * @param destinationType Property destinationType: The type of the destination address in the access control policy. This parameter is required.
         */
        public Builder destinationType(final java.lang.String destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }
        /**
         * Property destinationType: The type of the destination address in the access control policy.
         * <p>
         * Valid values:
         * net: CIDR block
         * group: address book
         * domain: domain name
         * <p>
         * @return {@code this}
         * @param destinationType Property destinationType: The type of the destination address in the access control policy. This parameter is required.
         */
        public Builder destinationType(final com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.props.destinationType(destinationType);
            return this;
        }

        /**
         * Property direction: The direction of the traffic to which the access control policy applies.
         * <p>
         * Valid values:
         * out: outbound traffic
         * <p>
         * @return {@code this}
         * @param direction Property direction: The direction of the traffic to which the access control policy applies. This parameter is required.
         */
        public Builder direction(final java.lang.String direction) {
            this.props.direction(direction);
            return this;
        }
        /**
         * Property direction: The direction of the traffic to which the access control policy applies.
         * <p>
         * Valid values:
         * out: outbound traffic
         * <p>
         * @return {@code this}
         * @param direction Property direction: The direction of the traffic to which the access control policy applies. This parameter is required.
         */
        public Builder direction(final com.aliyun.ros.cdk.core.IResolvable direction) {
            this.props.direction(direction);
            return this;
        }

        /**
         * Property natGatewayId: The ID of the NAT gateway.
         * <p>
         * @return {@code this}
         * @param natGatewayId Property natGatewayId: The ID of the NAT gateway. This parameter is required.
         */
        public Builder natGatewayId(final java.lang.String natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }
        /**
         * Property natGatewayId: The ID of the NAT gateway.
         * <p>
         * @return {@code this}
         * @param natGatewayId Property natGatewayId: The ID of the NAT gateway. This parameter is required.
         */
        public Builder natGatewayId(final com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }

        /**
         * Property newOrder: The priority of the access control policy.
         * <p>
         * The priority value starts from 1. A small priority value indicates a high priority.
         * <p>
         * @return {@code this}
         * @param newOrder Property newOrder: The priority of the access control policy. This parameter is required.
         */
        public Builder newOrder(final java.lang.Number newOrder) {
            this.props.newOrder(newOrder);
            return this;
        }
        /**
         * Property newOrder: The priority of the access control policy.
         * <p>
         * The priority value starts from 1. A small priority value indicates a high priority.
         * <p>
         * @return {@code this}
         * @param newOrder Property newOrder: The priority of the access control policy. This parameter is required.
         */
        public Builder newOrder(final com.aliyun.ros.cdk.core.IResolvable newOrder) {
            this.props.newOrder(newOrder);
            return this;
        }

        /**
         * Property proto: The protocol type in the access control policy.Valid values: ANY: all types of protocols TCP UDP ICMP.
         * <p>
         * @return {@code this}
         * @param proto Property proto: The protocol type in the access control policy.Valid values: ANY: all types of protocols TCP UDP ICMP. This parameter is required.
         */
        public Builder proto(final java.lang.String proto) {
            this.props.proto(proto);
            return this;
        }
        /**
         * Property proto: The protocol type in the access control policy.Valid values: ANY: all types of protocols TCP UDP ICMP.
         * <p>
         * @return {@code this}
         * @param proto Property proto: The protocol type in the access control policy.Valid values: ANY: all types of protocols TCP UDP ICMP. This parameter is required.
         */
        public Builder proto(final com.aliyun.ros.cdk.core.IResolvable proto) {
            this.props.proto(proto);
            return this;
        }

        /**
         * Property source: The source address in the access control policy.Valid values: If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0/24 If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group.
         * <p>
         * @return {@code this}
         * @param source Property source: The source address in the access control policy.Valid values: If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0/24 If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group. This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: The source address in the access control policy.Valid values: If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0/24 If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group.
         * <p>
         * @return {@code this}
         * @param source Property source: The source address in the access control policy.Valid values: If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0/24 If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * Property sourceType: The type of the source address in the access control policy.Valid values: net: source CIDR block group: source address book.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The type of the source address in the access control policy.Valid values: net: source CIDR block group: source address book. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: The type of the source address in the access control policy.Valid values: net: source CIDR block group: source address book.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The type of the source address in the access control policy.Valid values: net: source CIDR block group: source address book. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property destPort: The destination port in the access control policy.
         * <p>
         * Valid values:
         * If Proto is set to ICMP, DestPort is automatically left empty.
         * If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
         * If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
         * <p>
         * @return {@code this}
         * @param destPort Property destPort: The destination port in the access control policy. This parameter is required.
         */
        public Builder destPort(final java.lang.Number destPort) {
            this.props.destPort(destPort);
            return this;
        }
        /**
         * Property destPort: The destination port in the access control policy.
         * <p>
         * Valid values:
         * If Proto is set to ICMP, DestPort is automatically left empty.
         * If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
         * If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
         * <p>
         * @return {@code this}
         * @param destPort Property destPort: The destination port in the access control policy. This parameter is required.
         */
        public Builder destPort(final com.aliyun.ros.cdk.core.IResolvable destPort) {
            this.props.destPort(destPort);
            return this;
        }

        /**
         * Property destPortGroup: The name of the destination port address book in the access control policy.
         * <p>
         * @return {@code this}
         * @param destPortGroup Property destPortGroup: The name of the destination port address book in the access control policy. This parameter is required.
         */
        public Builder destPortGroup(final java.lang.String destPortGroup) {
            this.props.destPortGroup(destPortGroup);
            return this;
        }
        /**
         * Property destPortGroup: The name of the destination port address book in the access control policy.
         * <p>
         * @return {@code this}
         * @param destPortGroup Property destPortGroup: The name of the destination port address book in the access control policy. This parameter is required.
         */
        public Builder destPortGroup(final com.aliyun.ros.cdk.core.IResolvable destPortGroup) {
            this.props.destPortGroup(destPortGroup);
            return this;
        }

        /**
         * Property destPortType: The type of the destination port in the access control policy.
         * <p>
         * Valid values:
         * net: source CIDR block
         * group: source address book
         * <p>
         * @return {@code this}
         * @param destPortType Property destPortType: The type of the destination port in the access control policy. This parameter is required.
         */
        public Builder destPortType(final java.lang.String destPortType) {
            this.props.destPortType(destPortType);
            return this;
        }
        /**
         * Property destPortType: The type of the destination port in the access control policy.
         * <p>
         * Valid values:
         * net: source CIDR block
         * group: source address book
         * <p>
         * @return {@code this}
         * @param destPortType Property destPortType: The type of the destination port in the access control policy. This parameter is required.
         */
        public Builder destPortType(final com.aliyun.ros.cdk.core.IResolvable destPortType) {
            this.props.destPortType(destPortType);
            return this;
        }

        /**
         * Property domainResolveType: The domain name resolution method of the access control policy.
         * <p>
         * Valid values:
         * 0: fully qualified domain name (FQDN)-based resolution
         * 1: Domain Name System (DNS)-based dynamic resolution
         * 2: FQDN and DNS-based dynamic resolution
         * <p>
         * @return {@code this}
         * @param domainResolveType Property domainResolveType: The domain name resolution method of the access control policy. This parameter is required.
         */
        public Builder domainResolveType(final java.lang.Number domainResolveType) {
            this.props.domainResolveType(domainResolveType);
            return this;
        }
        /**
         * Property domainResolveType: The domain name resolution method of the access control policy.
         * <p>
         * Valid values:
         * 0: fully qualified domain name (FQDN)-based resolution
         * 1: Domain Name System (DNS)-based dynamic resolution
         * 2: FQDN and DNS-based dynamic resolution
         * <p>
         * @return {@code this}
         * @param domainResolveType Property domainResolveType: The domain name resolution method of the access control policy. This parameter is required.
         */
        public Builder domainResolveType(final com.aliyun.ros.cdk.core.IResolvable domainResolveType) {
            this.props.domainResolveType(domainResolveType);
            return this;
        }

        /**
         * Property endTime: The time when the access control policy stops taking effect.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the access control policy stops taking effect. This parameter is required.
         */
        public Builder endTime(final java.lang.String endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * Property endTime: The time when the access control policy stops taking effect.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The time when the access control policy stops taking effect. This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * Property ipVersion: The IP version supported by the access control policy.
         * <p>
         * Valid values:
         * 4: IPv4 (default)
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version supported by the access control policy. This parameter is required.
         */
        public Builder ipVersion(final java.lang.Number ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }
        /**
         * Property ipVersion: The IP version supported by the access control policy.
         * <p>
         * Valid values:
         * 4: IPv4 (default)
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version supported by the access control policy. This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }

        /**
         * Property release: Specifies whether to enable the access control policy.
         * <p>
         * By default, an access control policy is enabled after it is created. Valid values:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param release Property release: Specifies whether to enable the access control policy. This parameter is required.
         */
        public Builder release(final java.lang.Boolean release) {
            this.props.release(release);
            return this;
        }
        /**
         * Property release: Specifies whether to enable the access control policy.
         * <p>
         * By default, an access control policy is enabled after it is created. Valid values:
         * true
         * false
         * <p>
         * @return {@code this}
         * @param release Property release: Specifies whether to enable the access control policy. This parameter is required.
         */
        public Builder release(final com.aliyun.ros.cdk.core.IResolvable release) {
            this.props.release(release);
            return this;
        }

        /**
         * Property repeatDays: The days of a week or of a month on which the access control policy takes effect.
         * <p>
         * If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
         * If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
         * If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
         * <p>
         * @return {@code this}
         * @param repeatDays Property repeatDays: The days of a week or of a month on which the access control policy takes effect. This parameter is required.
         */
        public Builder repeatDays(final java.util.List<? extends java.lang.Object> repeatDays) {
            this.props.repeatDays(repeatDays);
            return this;
        }
        /**
         * Property repeatDays: The days of a week or of a month on which the access control policy takes effect.
         * <p>
         * If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
         * If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
         * If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
         * <p>
         * @return {@code this}
         * @param repeatDays Property repeatDays: The days of a week or of a month on which the access control policy takes effect. This parameter is required.
         */
        public Builder repeatDays(final com.aliyun.ros.cdk.core.IResolvable repeatDays) {
            this.props.repeatDays(repeatDays);
            return this;
        }

        /**
         * Property repeatEndTime: The point in time when the recurrence ends.
         * <p>
         * Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
         * <p>
         * @return {@code this}
         * @param repeatEndTime Property repeatEndTime: The point in time when the recurrence ends. This parameter is required.
         */
        public Builder repeatEndTime(final java.lang.String repeatEndTime) {
            this.props.repeatEndTime(repeatEndTime);
            return this;
        }
        /**
         * Property repeatEndTime: The point in time when the recurrence ends.
         * <p>
         * Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
         * <p>
         * @return {@code this}
         * @param repeatEndTime Property repeatEndTime: The point in time when the recurrence ends. This parameter is required.
         */
        public Builder repeatEndTime(final com.aliyun.ros.cdk.core.IResolvable repeatEndTime) {
            this.props.repeatEndTime(repeatEndTime);
            return this;
        }

        /**
         * Property repeatStartTime: The point in time when the recurrence starts.
         * <p>
         * Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
         * <p>
         * @return {@code this}
         * @param repeatStartTime Property repeatStartTime: The point in time when the recurrence starts. This parameter is required.
         */
        public Builder repeatStartTime(final java.lang.String repeatStartTime) {
            this.props.repeatStartTime(repeatStartTime);
            return this;
        }
        /**
         * Property repeatStartTime: The point in time when the recurrence starts.
         * <p>
         * Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
         * <p>
         * @return {@code this}
         * @param repeatStartTime Property repeatStartTime: The point in time when the recurrence starts. This parameter is required.
         */
        public Builder repeatStartTime(final com.aliyun.ros.cdk.core.IResolvable repeatStartTime) {
            this.props.repeatStartTime(repeatStartTime);
            return this;
        }

        /**
         * Property repeatType: The recurrence type for the access control policy to take effect.
         * <p>
         * Valid values:
         * Permanent (default): The policy always takes effect.
         * None: The policy takes effect for only once.
         * Daily: The policy takes effect on a daily basis.
         * Weekly: The policy takes effect on a weekly basis.
         * Monthly: The policy takes effect on a monthly basis.
         * <p>
         * @return {@code this}
         * @param repeatType Property repeatType: The recurrence type for the access control policy to take effect. This parameter is required.
         */
        public Builder repeatType(final java.lang.String repeatType) {
            this.props.repeatType(repeatType);
            return this;
        }
        /**
         * Property repeatType: The recurrence type for the access control policy to take effect.
         * <p>
         * Valid values:
         * Permanent (default): The policy always takes effect.
         * None: The policy takes effect for only once.
         * Daily: The policy takes effect on a daily basis.
         * Weekly: The policy takes effect on a weekly basis.
         * Monthly: The policy takes effect on a monthly basis.
         * <p>
         * @return {@code this}
         * @param repeatType Property repeatType: The recurrence type for the access control policy to take effect. This parameter is required.
         */
        public Builder repeatType(final com.aliyun.ros.cdk.core.IResolvable repeatType) {
            this.props.repeatType(repeatType);
            return this;
        }

        /**
         * Property startTime: The time when the access control policy starts to take effect.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The time when the access control policy starts to take effect. This parameter is required.
         */
        public Builder startTime(final java.lang.String startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * Property startTime: The time when the access control policy starts to take effect.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The time when the access control policy starts to take effect. This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicy build() {
            return new com.aliyun.ros.cdk.cloudfw.NatFirewallControlPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
