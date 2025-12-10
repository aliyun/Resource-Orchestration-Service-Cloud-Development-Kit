package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::VpcFirewallControlPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.466Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicy")
public class VpcFirewallControlPolicy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudfw.IVpcFirewallControlPolicy {

    protected VpcFirewallControlPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcFirewallControlPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VpcFirewallControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VpcFirewallControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AclUuid: The unique ID of the access control policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrAclUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicyProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicy> {
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
        private final com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicyProps.Builder();
        }

        /**
         * Property aclAction: The action that Cloud Firewall performs on the traffic.
         * <p>
         * Valid values:
         * accept: allows the traffic.
         * drop: denies the traffic.
         * log: monitors the traffic.
         * <p>
         * @return {@code this}
         * @param aclAction Property aclAction: The action that Cloud Firewall performs on the traffic. This parameter is required.
         */
        public Builder aclAction(final java.lang.String aclAction) {
            this.props.aclAction(aclAction);
            return this;
        }
        /**
         * Property aclAction: The action that Cloud Firewall performs on the traffic.
         * <p>
         * Valid values:
         * accept: allows the traffic.
         * drop: denies the traffic.
         * log: monitors the traffic.
         * <p>
         * @return {@code this}
         * @param aclAction Property aclAction: The action that Cloud Firewall performs on the traffic. This parameter is required.
         */
        public Builder aclAction(final com.aliyun.ros.cdk.core.IResolvable aclAction) {
            this.props.aclAction(aclAction);
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
         * Set this parameter in the following way:
         * If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
         * Example: 10.2.3.0/24.
         * If the DestinationType parameter is set to group, set the value to the name of an address book.
         * Example: db_group.
         * If the DestinationType parameter is set to domain, set the value to a domain name.
         * Example: *.aliyuncs.com.
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
         * Set this parameter in the following way:
         * If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
         * Example: 10.2.3.0/24.
         * If the DestinationType parameter is set to group, set the value to the name of an address book.
         * Example: db_group.
         * If the DestinationType parameter is set to domain, set the value to a domain name.
         * Example: *.aliyuncs.com.
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
         * Property newOrder: The priority of the access control policy.
         * <p>
         * The priority value starts from 1. A smaller priority value indicates a higher priority.
         * Note The value of -1 indicates the lowest priority.
         * <p>
         * @return {@code this}
         * @param newOrder Property newOrder: The priority of the access control policy. This parameter is required.
         */
        public Builder newOrder(final java.lang.String newOrder) {
            this.props.newOrder(newOrder);
            return this;
        }
        /**
         * Property newOrder: The priority of the access control policy.
         * <p>
         * The priority value starts from 1. A smaller priority value indicates a higher priority.
         * Note The value of -1 indicates the lowest priority.
         * <p>
         * @return {@code this}
         * @param newOrder Property newOrder: The priority of the access control policy. This parameter is required.
         */
        public Builder newOrder(final com.aliyun.ros.cdk.core.IResolvable newOrder) {
            this.props.newOrder(newOrder);
            return this;
        }

        /**
         * Property proto: The type of the security protocol in the access control policy.
         * <p>
         * @return {@code this}
         * @param proto Property proto: The type of the security protocol in the access control policy. This parameter is required.
         */
        public Builder proto(final java.lang.String proto) {
            this.props.proto(proto);
            return this;
        }
        /**
         * Property proto: The type of the security protocol in the access control policy.
         * <p>
         * @return {@code this}
         * @param proto Property proto: The type of the security protocol in the access control policy. This parameter is required.
         */
        public Builder proto(final com.aliyun.ros.cdk.core.IResolvable proto) {
            this.props.proto(proto);
            return this;
        }

        /**
         * Property source: The source address in the access control policy.
         * <p>
         * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
         * If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
         * <p>
         * @return {@code this}
         * @param source Property source: The source address in the access control policy. This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: The source address in the access control policy.
         * <p>
         * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
         * If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
         * <p>
         * @return {@code this}
         * @param source Property source: The source address in the access control policy. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * Property sourceType: The type of the source address in the access control policy.
         * <p>
         * Valid values:
         * net: CIDR block
         * group: address book
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The type of the source address in the access control policy. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: The type of the source address in the access control policy.
         * <p>
         * Valid values:
         * net: CIDR block
         * group: address book
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The type of the source address in the access control policy. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
         * <p>
         * If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
         * that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
         * If the VPC firewall is used to protect Express Connect, set the value to the ID of
         * the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
         * Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
         * <p>
         * @return {@code this}
         * @param vpcFirewallId Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy. This parameter is required.
         */
        public Builder vpcFirewallId(final java.lang.String vpcFirewallId) {
            this.props.vpcFirewallId(vpcFirewallId);
            return this;
        }
        /**
         * Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
         * <p>
         * If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
         * that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
         * If the VPC firewall is used to protect Express Connect, set the value to the ID of
         * the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
         * Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
         * <p>
         * @return {@code this}
         * @param vpcFirewallId Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy. This parameter is required.
         */
        public Builder vpcFirewallId(final com.aliyun.ros.cdk.core.IResolvable vpcFirewallId) {
            this.props.vpcFirewallId(vpcFirewallId);
            return this;
        }

        /**
         * Property applicationName: The application type that the access control policy supports.
         * <p>
         * Valid values:
         * ANY (indicates that all application types are supported)
         * FTP
         * HTTP
         * HTTPS
         * MySQL
         * SMTP
         * SMTPS
         * RDP
         * VNC
         * SSH
         * Redis
         * MQTT
         * MongoDB
         * Memcache
         * SSL
         * <p>
         * @return {@code this}
         * @param applicationName Property applicationName: The application type that the access control policy supports. This parameter is required.
         */
        public Builder applicationName(final java.lang.String applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }
        /**
         * Property applicationName: The application type that the access control policy supports.
         * <p>
         * Valid values:
         * ANY (indicates that all application types are supported)
         * FTP
         * HTTP
         * HTTPS
         * MySQL
         * SMTP
         * SMTPS
         * RDP
         * VNC
         * SSH
         * Redis
         * MQTT
         * MongoDB
         * Memcache
         * SSL
         * <p>
         * @return {@code this}
         * @param applicationName Property applicationName: The application type that the access control policy supports. This parameter is required.
         */
        public Builder applicationName(final com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }

        /**
         * Property applicationNameList: List of application types supported by the access control policy.
         * <p>
         * @return {@code this}
         * @param applicationNameList Property applicationNameList: List of application types supported by the access control policy. This parameter is required.
         */
        public Builder applicationNameList(final com.aliyun.ros.cdk.core.IResolvable applicationNameList) {
            this.props.applicationNameList(applicationNameList);
            return this;
        }
        /**
         * Property applicationNameList: List of application types supported by the access control policy.
         * <p>
         * @return {@code this}
         * @param applicationNameList Property applicationNameList: List of application types supported by the access control policy. This parameter is required.
         */
        public Builder applicationNameList(final java.util.List<? extends java.lang.Object> applicationNameList) {
            this.props.applicationNameList(applicationNameList);
            return this;
        }

        /**
         * Property destPort: The destination port in the access control policy.
         * <p>
         * Note This parameter must be specified if the DestPortType parameter is set to port.
         * <p>
         * @return {@code this}
         * @param destPort Property destPort: The destination port in the access control policy. This parameter is required.
         */
        public Builder destPort(final java.lang.String destPort) {
            this.props.destPort(destPort);
            return this;
        }
        /**
         * Property destPort: The destination port in the access control policy.
         * <p>
         * Note This parameter must be specified if the DestPortType parameter is set to port.
         * <p>
         * @return {@code this}
         * @param destPort Property destPort: The destination port in the access control policy. This parameter is required.
         */
        public Builder destPort(final com.aliyun.ros.cdk.core.IResolvable destPort) {
            this.props.destPort(destPort);
            return this;
        }

        /**
         * Property destPortGroup: The address book of destination ports in the access control policy.
         * <p>
         * Note This parameter must be specified if the DestPortType parameter is set to group.
         * <p>
         * @return {@code this}
         * @param destPortGroup Property destPortGroup: The address book of destination ports in the access control policy. This parameter is required.
         */
        public Builder destPortGroup(final java.lang.String destPortGroup) {
            this.props.destPortGroup(destPortGroup);
            return this;
        }
        /**
         * Property destPortGroup: The address book of destination ports in the access control policy.
         * <p>
         * Note This parameter must be specified if the DestPortType parameter is set to group.
         * <p>
         * @return {@code this}
         * @param destPortGroup Property destPortGroup: The address book of destination ports in the access control policy. This parameter is required.
         */
        public Builder destPortGroup(final com.aliyun.ros.cdk.core.IResolvable destPortGroup) {
            this.props.destPortGroup(destPortGroup);
            return this;
        }

        /**
         * Property destPortType: The type of the destination port in the access control policy.
         * <p>
         * Valid values:
         * port: port
         * group: address book
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
         * port: port
         * group: address book
         * <p>
         * @return {@code this}
         * @param destPortType Property destPortType: The type of the destination port in the access control policy. This parameter is required.
         */
        public Builder destPortType(final com.aliyun.ros.cdk.core.IResolvable destPortType) {
            this.props.destPortType(destPortType);
            return this;
        }

        /**
         * Property endTime: The end time of the policy validity period for an access control policy.
         * <p>
         * It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
         * Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The end time of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder endTime(final java.lang.Number endTime) {
            this.props.endTime(endTime);
            return this;
        }
        /**
         * Property endTime: The end time of the policy validity period for an access control policy.
         * <p>
         * It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
         * Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
         * <p>
         * @return {@code this}
         * @param endTime Property endTime: The end time of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder endTime(final com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.props.endTime(endTime);
            return this;
        }

        /**
         * Property lang: The natural language of the request and response.
         * <p>
         * Valid values:
         * zh: Chinese
         * en: English
         * <p>
         * @return {@code this}
         * @param lang Property lang: The natural language of the request and response. This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props.lang(lang);
            return this;
        }
        /**
         * Property lang: The natural language of the request and response.
         * <p>
         * Valid values:
         * zh: Chinese
         * en: English
         * <p>
         * @return {@code this}
         * @param lang Property lang: The natural language of the request and response. This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props.lang(lang);
            return this;
        }

        /**
         * Property memberUid: Member account UID of current Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param memberUid Property memberUid: Member account UID of current Alibaba Cloud account. This parameter is required.
         */
        public Builder memberUid(final java.lang.String memberUid) {
            this.props.memberUid(memberUid);
            return this;
        }
        /**
         * Property memberUid: Member account UID of current Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param memberUid Property memberUid: Member account UID of current Alibaba Cloud account. This parameter is required.
         */
        public Builder memberUid(final com.aliyun.ros.cdk.core.IResolvable memberUid) {
            this.props.memberUid(memberUid);
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
         * Property release: The enabled state of the access control policy.
         * <p>
         * This policy is enabled by default when it is created. Value:
         * <p>
         * <ul>
         * <li>true: Access control policy is enabled</li>
         * <li>false: Access control policy is not enabled</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param release Property release: The enabled state of the access control policy. This parameter is required.
         */
        public Builder release(final java.lang.Boolean release) {
            this.props.release(release);
            return this;
        }
        /**
         * Property release: The enabled state of the access control policy.
         * <p>
         * This policy is enabled by default when it is created. Value:
         * <p>
         * <ul>
         * <li>true: Access control policy is enabled</li>
         * <li>false: Access control policy is not enabled</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param release Property release: The enabled state of the access control policy. This parameter is required.
         */
        public Builder release(final com.aliyun.ros.cdk.core.IResolvable release) {
            this.props.release(release);
            return this;
        }

        /**
         * Property repeatDays: A collection of repeated dates of policy validity for an access control policy.
         * <p>
         * When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
         * When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
         * Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
         * When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
         * Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
         * <p>
         * @return {@code this}
         * @param repeatDays Property repeatDays: A collection of repeated dates of policy validity for an access control policy. This parameter is required.
         */
        public Builder repeatDays(final com.aliyun.ros.cdk.core.IResolvable repeatDays) {
            this.props.repeatDays(repeatDays);
            return this;
        }
        /**
         * Property repeatDays: A collection of repeated dates of policy validity for an access control policy.
         * <p>
         * When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
         * When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
         * Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
         * When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
         * Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
         * <p>
         * @return {@code this}
         * @param repeatDays Property repeatDays: A collection of repeated dates of policy validity for an access control policy. This parameter is required.
         */
        public Builder repeatDays(final java.util.List<? extends java.lang.Object> repeatDays) {
            this.props.repeatDays(repeatDays);
            return this;
        }

        /**
         * Property repeatEndTime: The repeated end time of the policy validity period for an access control policy.
         * <p>
         * For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
         * Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
         * <p>
         * @return {@code this}
         * @param repeatEndTime Property repeatEndTime: The repeated end time of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder repeatEndTime(final java.lang.String repeatEndTime) {
            this.props.repeatEndTime(repeatEndTime);
            return this;
        }
        /**
         * Property repeatEndTime: The repeated end time of the policy validity period for an access control policy.
         * <p>
         * For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
         * Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
         * <p>
         * @return {@code this}
         * @param repeatEndTime Property repeatEndTime: The repeated end time of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder repeatEndTime(final com.aliyun.ros.cdk.core.IResolvable repeatEndTime) {
            this.props.repeatEndTime(repeatEndTime);
            return this;
        }

        /**
         * Property repeatStartTime: The repeated start time of the policy validity period for an access control policy.
         * <p>
         * For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
         * Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
         * <p>
         * @return {@code this}
         * @param repeatStartTime Property repeatStartTime: The repeated start time of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder repeatStartTime(final java.lang.String repeatStartTime) {
            this.props.repeatStartTime(repeatStartTime);
            return this;
        }
        /**
         * Property repeatStartTime: The repeated start time of the policy validity period for an access control policy.
         * <p>
         * For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
         * Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
         * <p>
         * @return {@code this}
         * @param repeatStartTime Property repeatStartTime: The repeated start time of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder repeatStartTime(final com.aliyun.ros.cdk.core.IResolvable repeatStartTime) {
            this.props.repeatStartTime(repeatStartTime);
            return this;
        }

        /**
         * Property repeatType: The repetition type of the policy validity period for an access control policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Permanent (default)</li>
         * <li>None</li>
         * <li>Daily</li>
         * <li>Weekly</li>
         * <li>Monthly.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param repeatType Property repeatType: The repetition type of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder repeatType(final java.lang.String repeatType) {
            this.props.repeatType(repeatType);
            return this;
        }
        /**
         * Property repeatType: The repetition type of the policy validity period for an access control policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Permanent (default)</li>
         * <li>None</li>
         * <li>Daily</li>
         * <li>Weekly</li>
         * <li>Monthly.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param repeatType Property repeatType: The repetition type of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder repeatType(final com.aliyun.ros.cdk.core.IResolvable repeatType) {
            this.props.repeatType(repeatType);
            return this;
        }

        /**
         * Property startTime: The start time of the policy validity period for an access control policy.
         * <p>
         * It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
         * Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The start time of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder startTime(final java.lang.Number startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * Property startTime: The start time of the policy validity period for an access control policy.
         * <p>
         * It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
         * Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The start time of the policy validity period for an access control policy. This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicy build() {
            return new com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
