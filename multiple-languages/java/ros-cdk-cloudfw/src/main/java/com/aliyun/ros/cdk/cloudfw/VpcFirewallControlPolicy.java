package com.aliyun.ros.cdk.cloudfw;

/**
 * A ROS resource type:  `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:14.010Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicy")
public class VpcFirewallControlPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected VpcFirewallControlPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcFirewallControlPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`.
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
    public VpcFirewallControlPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAclUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrAclUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.VpcFirewallControlPolicy}.
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
