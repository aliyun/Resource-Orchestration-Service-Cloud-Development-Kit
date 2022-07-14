package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a `ALIYUN::CLOUDFW::VpcFirewallControlPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:19.593Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicyProps")
@software.amazon.jsii.Jsii.Proxy(VpcFirewallControlPolicyProps.Jsii$Proxy.class)
public interface VpcFirewallControlPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aclAction: The action that Cloud Firewall performs on the traffic.
     * <p>
     * Valid values:
     * accept: allows the traffic.
     * drop: denies the traffic.
     * log: monitors the traffic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclAction();

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName();

    /**
     * Property description: The description of the access control policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestination();

    /**
     * Property destinationType: The type of the destination address in the access control policy.
     * <p>
     * Valid values:
     * net: CIDR block
     * group: address book
     * domain: domain name
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationType();

    /**
     * Property newOrder: The priority of the access control policy.
     * <p>
     * The priority value starts from 1. A smaller priority value indicates a higher priority.
     * Note The value of -1 indicates the lowest priority.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNewOrder();

    /**
     * Property proto: The type of the security protocol in the access control policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProto();

    /**
     * Property source: The source address in the access control policy.
     * <p>
     * If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
     * If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSource();

    /**
     * Property sourceType: The type of the source address in the access control policy.
     * <p>
     * Valid values:
     * net: CIDR block
     * group: address book
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceType();

    /**
     * Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
     * <p>
     * If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
     * that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
     * If the VPC firewall is used to protect Express Connect, set the value to the ID of
     * the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
     * Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcFirewallId();

    /**
     * Property destPort: The destination port in the access control policy.
     * <p>
     * Note This parameter must be specified if the DestPortType parameter is set to port.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPort() {
        return null;
    }

    /**
     * Property destPortGroup: The address book of destination ports in the access control policy.
     * <p>
     * Note This parameter must be specified if the DestPortType parameter is set to group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPortGroup() {
        return null;
    }

    /**
     * Property destPortType: The type of the destination port in the access control policy.
     * <p>
     * Valid values:
     * port: port
     * group: address book
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPortType() {
        return null;
    }

    /**
     * Property lang: The natural language of the request and response.
     * <p>
     * Valid values:
     * zh: Chinese
     * en: English
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return null;
    }

    /**
     * Property regionId: Region ID.
     * <p>
     * Default to cn-hangzhou.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcFirewallControlPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcFirewallControlPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcFirewallControlPolicyProps> {
        java.lang.Object aclAction;
        java.lang.Object applicationName;
        java.lang.Object description;
        java.lang.Object destination;
        java.lang.Object destinationType;
        java.lang.Object newOrder;
        java.lang.Object proto;
        java.lang.Object source;
        java.lang.Object sourceType;
        java.lang.Object vpcFirewallId;
        java.lang.Object destPort;
        java.lang.Object destPortGroup;
        java.lang.Object destPortType;
        java.lang.Object lang;
        java.lang.Object regionId;

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getAclAction}
         * @param aclAction Property aclAction: The action that Cloud Firewall performs on the traffic. This parameter is required.
         *                  Valid values:
         *                  accept: allows the traffic.
         *                  drop: denies the traffic.
         *                  log: monitors the traffic.
         * @return {@code this}
         */
        public Builder aclAction(java.lang.String aclAction) {
            this.aclAction = aclAction;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getAclAction}
         * @param aclAction Property aclAction: The action that Cloud Firewall performs on the traffic. This parameter is required.
         *                  Valid values:
         *                  accept: allows the traffic.
         *                  drop: denies the traffic.
         *                  log: monitors the traffic.
         * @return {@code this}
         */
        public Builder aclAction(com.aliyun.ros.cdk.core.IResolvable aclAction) {
            this.aclAction = aclAction;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getApplicationName}
         * @param applicationName Property applicationName: The application type that the access control policy supports. This parameter is required.
         *                        Valid values:
         *                        ANY (indicates that all application types are supported)
         *                        FTP
         *                        HTTP
         *                        HTTPS
         *                        MySQL
         *                        SMTP
         *                        SMTPS
         *                        RDP
         *                        VNC
         *                        SSH
         *                        Redis
         *                        MQTT
         *                        MongoDB
         *                        Memcache
         *                        SSL
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getApplicationName}
         * @param applicationName Property applicationName: The application type that the access control policy supports. This parameter is required.
         *                        Valid values:
         *                        ANY (indicates that all application types are supported)
         *                        FTP
         *                        HTTP
         *                        HTTPS
         *                        MySQL
         *                        SMTP
         *                        SMTPS
         *                        RDP
         *                        VNC
         *                        SSH
         *                        Redis
         *                        MQTT
         *                        MongoDB
         *                        Memcache
         *                        SSL
         * @return {@code this}
         */
        public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDescription}
         * @param description Property description: The description of the access control policy. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDescription}
         * @param description Property description: The description of the access control policy. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestination}
         * @param destination Property destination: The destination address in the access control policy. This parameter is required.
         *                    Set this parameter in the following way:
         *                    If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
         *                    Example: 10.2.3.0/24.
         *                    If the DestinationType parameter is set to group, set the value to the name of an address book.
         *                    Example: db_group.
         *                    If the DestinationType parameter is set to domain, set the value to a domain name.
         *                    Example: *.aliyuncs.com.
         * @return {@code this}
         */
        public Builder destination(java.lang.String destination) {
            this.destination = destination;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestination}
         * @param destination Property destination: The destination address in the access control policy. This parameter is required.
         *                    Set this parameter in the following way:
         *                    If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
         *                    Example: 10.2.3.0/24.
         *                    If the DestinationType parameter is set to group, set the value to the name of an address book.
         *                    Example: db_group.
         *                    If the DestinationType parameter is set to domain, set the value to a domain name.
         *                    Example: *.aliyuncs.com.
         * @return {@code this}
         */
        public Builder destination(com.aliyun.ros.cdk.core.IResolvable destination) {
            this.destination = destination;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestinationType}
         * @param destinationType Property destinationType: The type of the destination address in the access control policy. This parameter is required.
         *                        Valid values:
         *                        net: CIDR block
         *                        group: address book
         *                        domain: domain name
         * @return {@code this}
         */
        public Builder destinationType(java.lang.String destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestinationType}
         * @param destinationType Property destinationType: The type of the destination address in the access control policy. This parameter is required.
         *                        Valid values:
         *                        net: CIDR block
         *                        group: address book
         *                        domain: domain name
         * @return {@code this}
         */
        public Builder destinationType(com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getNewOrder}
         * @param newOrder Property newOrder: The priority of the access control policy. This parameter is required.
         *                 The priority value starts from 1. A smaller priority value indicates a higher priority.
         *                 Note The value of -1 indicates the lowest priority.
         * @return {@code this}
         */
        public Builder newOrder(java.lang.String newOrder) {
            this.newOrder = newOrder;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getNewOrder}
         * @param newOrder Property newOrder: The priority of the access control policy. This parameter is required.
         *                 The priority value starts from 1. A smaller priority value indicates a higher priority.
         *                 Note The value of -1 indicates the lowest priority.
         * @return {@code this}
         */
        public Builder newOrder(com.aliyun.ros.cdk.core.IResolvable newOrder) {
            this.newOrder = newOrder;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getProto}
         * @param proto Property proto: The type of the security protocol in the access control policy. This parameter is required.
         * @return {@code this}
         */
        public Builder proto(java.lang.String proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getProto}
         * @param proto Property proto: The type of the security protocol in the access control policy. This parameter is required.
         * @return {@code this}
         */
        public Builder proto(com.aliyun.ros.cdk.core.IResolvable proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getSource}
         * @param source Property source: The source address in the access control policy. This parameter is required.
         *               If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
         *               If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getSource}
         * @param source Property source: The source address in the access control policy. This parameter is required.
         *               If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
         *               If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getSourceType}
         * @param sourceType Property sourceType: The type of the source address in the access control policy. This parameter is required.
         *                   Valid values:
         *                   net: CIDR block
         *                   group: address book
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getSourceType}
         * @param sourceType Property sourceType: The type of the source address in the access control policy. This parameter is required.
         *                   Valid values:
         *                   net: CIDR block
         *                   group: address book
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getVpcFirewallId}
         * @param vpcFirewallId Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy. This parameter is required.
         *                      If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
         *                      that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
         *                      If the VPC firewall is used to protect Express Connect, set the value to the ID of
         *                      the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
         *                      Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
         * @return {@code this}
         */
        public Builder vpcFirewallId(java.lang.String vpcFirewallId) {
            this.vpcFirewallId = vpcFirewallId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getVpcFirewallId}
         * @param vpcFirewallId Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy. This parameter is required.
         *                      If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
         *                      that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
         *                      If the VPC firewall is used to protect Express Connect, set the value to the ID of
         *                      the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
         *                      Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
         * @return {@code this}
         */
        public Builder vpcFirewallId(com.aliyun.ros.cdk.core.IResolvable vpcFirewallId) {
            this.vpcFirewallId = vpcFirewallId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestPort}
         * @param destPort Property destPort: The destination port in the access control policy.
         *                 Note This parameter must be specified if the DestPortType parameter is set to port.
         * @return {@code this}
         */
        public Builder destPort(java.lang.String destPort) {
            this.destPort = destPort;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestPort}
         * @param destPort Property destPort: The destination port in the access control policy.
         *                 Note This parameter must be specified if the DestPortType parameter is set to port.
         * @return {@code this}
         */
        public Builder destPort(com.aliyun.ros.cdk.core.IResolvable destPort) {
            this.destPort = destPort;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestPortGroup}
         * @param destPortGroup Property destPortGroup: The address book of destination ports in the access control policy.
         *                      Note This parameter must be specified if the DestPortType parameter is set to group.
         * @return {@code this}
         */
        public Builder destPortGroup(java.lang.String destPortGroup) {
            this.destPortGroup = destPortGroup;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestPortGroup}
         * @param destPortGroup Property destPortGroup: The address book of destination ports in the access control policy.
         *                      Note This parameter must be specified if the DestPortType parameter is set to group.
         * @return {@code this}
         */
        public Builder destPortGroup(com.aliyun.ros.cdk.core.IResolvable destPortGroup) {
            this.destPortGroup = destPortGroup;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestPortType}
         * @param destPortType Property destPortType: The type of the destination port in the access control policy.
         *                     Valid values:
         *                     port: port
         *                     group: address book
         * @return {@code this}
         */
        public Builder destPortType(java.lang.String destPortType) {
            this.destPortType = destPortType;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getDestPortType}
         * @param destPortType Property destPortType: The type of the destination port in the access control policy.
         *                     Valid values:
         *                     port: port
         *                     group: address book
         * @return {@code this}
         */
        public Builder destPortType(com.aliyun.ros.cdk.core.IResolvable destPortType) {
            this.destPortType = destPortType;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getLang}
         * @param lang Property lang: The natural language of the request and response.
         *             Valid values:
         *             zh: Chinese
         *             en: English
         * @return {@code this}
         */
        public Builder lang(java.lang.String lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getLang}
         * @param lang Property lang: The natural language of the request and response.
         *             Valid values:
         *             zh: Chinese
         *             en: English
         * @return {@code this}
         */
        public Builder lang(com.aliyun.ros.cdk.core.IResolvable lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getRegionId}
         * @param regionId Property regionId: Region ID.
         *                 Default to cn-hangzhou.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link VpcFirewallControlPolicyProps#getRegionId}
         * @param regionId Property regionId: Region ID.
         *                 Default to cn-hangzhou.
         * @return {@code this}
         */
        public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcFirewallControlPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcFirewallControlPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcFirewallControlPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcFirewallControlPolicyProps {
        private final java.lang.Object aclAction;
        private final java.lang.Object applicationName;
        private final java.lang.Object description;
        private final java.lang.Object destination;
        private final java.lang.Object destinationType;
        private final java.lang.Object newOrder;
        private final java.lang.Object proto;
        private final java.lang.Object source;
        private final java.lang.Object sourceType;
        private final java.lang.Object vpcFirewallId;
        private final java.lang.Object destPort;
        private final java.lang.Object destPortGroup;
        private final java.lang.Object destPortType;
        private final java.lang.Object lang;
        private final java.lang.Object regionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclAction = software.amazon.jsii.Kernel.get(this, "aclAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destination = software.amazon.jsii.Kernel.get(this, "destination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationType = software.amazon.jsii.Kernel.get(this, "destinationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.newOrder = software.amazon.jsii.Kernel.get(this, "newOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proto = software.amazon.jsii.Kernel.get(this, "proto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcFirewallId = software.amazon.jsii.Kernel.get(this, "vpcFirewallId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPort = software.amazon.jsii.Kernel.get(this, "destPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPortGroup = software.amazon.jsii.Kernel.get(this, "destPortGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPortType = software.amazon.jsii.Kernel.get(this, "destPortType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lang = software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclAction = java.util.Objects.requireNonNull(builder.aclAction, "aclAction is required");
            this.applicationName = java.util.Objects.requireNonNull(builder.applicationName, "applicationName is required");
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.destination = java.util.Objects.requireNonNull(builder.destination, "destination is required");
            this.destinationType = java.util.Objects.requireNonNull(builder.destinationType, "destinationType is required");
            this.newOrder = java.util.Objects.requireNonNull(builder.newOrder, "newOrder is required");
            this.proto = java.util.Objects.requireNonNull(builder.proto, "proto is required");
            this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
            this.sourceType = java.util.Objects.requireNonNull(builder.sourceType, "sourceType is required");
            this.vpcFirewallId = java.util.Objects.requireNonNull(builder.vpcFirewallId, "vpcFirewallId is required");
            this.destPort = builder.destPort;
            this.destPortGroup = builder.destPortGroup;
            this.destPortType = builder.destPortType;
            this.lang = builder.lang;
            this.regionId = builder.regionId;
        }

        @Override
        public final java.lang.Object getAclAction() {
            return this.aclAction;
        }

        @Override
        public final java.lang.Object getApplicationName() {
            return this.applicationName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDestination() {
            return this.destination;
        }

        @Override
        public final java.lang.Object getDestinationType() {
            return this.destinationType;
        }

        @Override
        public final java.lang.Object getNewOrder() {
            return this.newOrder;
        }

        @Override
        public final java.lang.Object getProto() {
            return this.proto;
        }

        @Override
        public final java.lang.Object getSource() {
            return this.source;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.Object getVpcFirewallId() {
            return this.vpcFirewallId;
        }

        @Override
        public final java.lang.Object getDestPort() {
            return this.destPort;
        }

        @Override
        public final java.lang.Object getDestPortGroup() {
            return this.destPortGroup;
        }

        @Override
        public final java.lang.Object getDestPortType() {
            return this.destPortType;
        }

        @Override
        public final java.lang.Object getLang() {
            return this.lang;
        }

        @Override
        public final java.lang.Object getRegionId() {
            return this.regionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aclAction", om.valueToTree(this.getAclAction()));
            data.set("applicationName", om.valueToTree(this.getApplicationName()));
            data.set("description", om.valueToTree(this.getDescription()));
            data.set("destination", om.valueToTree(this.getDestination()));
            data.set("destinationType", om.valueToTree(this.getDestinationType()));
            data.set("newOrder", om.valueToTree(this.getNewOrder()));
            data.set("proto", om.valueToTree(this.getProto()));
            data.set("source", om.valueToTree(this.getSource()));
            data.set("sourceType", om.valueToTree(this.getSourceType()));
            data.set("vpcFirewallId", om.valueToTree(this.getVpcFirewallId()));
            if (this.getDestPort() != null) {
                data.set("destPort", om.valueToTree(this.getDestPort()));
            }
            if (this.getDestPortGroup() != null) {
                data.set("destPortGroup", om.valueToTree(this.getDestPortGroup()));
            }
            if (this.getDestPortType() != null) {
                data.set("destPortType", om.valueToTree(this.getDestPortType()));
            }
            if (this.getLang() != null) {
                data.set("lang", om.valueToTree(this.getLang()));
            }
            if (this.getRegionId() != null) {
                data.set("regionId", om.valueToTree(this.getRegionId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcFirewallControlPolicyProps.Jsii$Proxy that = (VpcFirewallControlPolicyProps.Jsii$Proxy) o;

            if (!aclAction.equals(that.aclAction)) return false;
            if (!applicationName.equals(that.applicationName)) return false;
            if (!description.equals(that.description)) return false;
            if (!destination.equals(that.destination)) return false;
            if (!destinationType.equals(that.destinationType)) return false;
            if (!newOrder.equals(that.newOrder)) return false;
            if (!proto.equals(that.proto)) return false;
            if (!source.equals(that.source)) return false;
            if (!sourceType.equals(that.sourceType)) return false;
            if (!vpcFirewallId.equals(that.vpcFirewallId)) return false;
            if (this.destPort != null ? !this.destPort.equals(that.destPort) : that.destPort != null) return false;
            if (this.destPortGroup != null ? !this.destPortGroup.equals(that.destPortGroup) : that.destPortGroup != null) return false;
            if (this.destPortType != null ? !this.destPortType.equals(that.destPortType) : that.destPortType != null) return false;
            if (this.lang != null ? !this.lang.equals(that.lang) : that.lang != null) return false;
            return this.regionId != null ? this.regionId.equals(that.regionId) : that.regionId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclAction.hashCode();
            result = 31 * result + (this.applicationName.hashCode());
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.destination.hashCode());
            result = 31 * result + (this.destinationType.hashCode());
            result = 31 * result + (this.newOrder.hashCode());
            result = 31 * result + (this.proto.hashCode());
            result = 31 * result + (this.source.hashCode());
            result = 31 * result + (this.sourceType.hashCode());
            result = 31 * result + (this.vpcFirewallId.hashCode());
            result = 31 * result + (this.destPort != null ? this.destPort.hashCode() : 0);
            result = 31 * result + (this.destPortGroup != null ? this.destPortGroup.hashCode() : 0);
            result = 31 * result + (this.destPortType != null ? this.destPortType.hashCode() : 0);
            result = 31 * result + (this.lang != null ? this.lang.hashCode() : 0);
            result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
            return result;
        }
    }
}
