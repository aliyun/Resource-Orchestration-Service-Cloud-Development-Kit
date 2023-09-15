package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>ALIYUN::CLOUDFW::ControlPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.829Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.ControlPolicyProps")
@software.amazon.jsii.Jsii.Proxy(ControlPolicyProps.Jsii$Proxy.class)
public interface ControlPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property aclAction: Traffic access control policy set by the cloud of a firewall.
     * <p>
     * accept: Release
     * drop: rejected
     * log: Observation
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclAction();

    /**
     * Property applicationName: Application types supported by the security policy.
     * <p>
     * The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
     * NOTE ANY indicates that the policy is applied to all types of applications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName();

    /**
     * Property description: Security access control policy description information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     * Property destination: Security Access Control destination address policy.
     * <p>
     * When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
     * When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
     * When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
     * When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestination();

    /**
     * Property destinationType: Security Access Control destination address type of policy.
     * <p>
     * net: Destination network segment (CIDR)
     * group: destination address book
     * domain: The purpose domain
     * location: The purpose area
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationType();

    /**
     * Property direction: Security access control traffic direction policies.
     * <p>
     * in: internal and external traffic access control
     * out: within the flow of external access control
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirection();

    /**
     * Property newOrder: Security access control priority policy in force.
     * <p>
     * Priority number increments sequentially from 1, lower the priority number, the higher the priority.
     * Description -1 indicates the lowest priority.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNewOrder();

    /**
     * Property proto: The type of security protocol for traffic access in the security access control policy.
     * <p>
     * Can be set to ANY when you are not sure of the specific protocol type.
     * Allowed values: ANY, TCP, UDP, ICMP
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProto();

    /**
     * Property source: Security access control source address policy.
     * <p>
     * When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
     * When SourceType as a group, Source name for the source address book. For example: db_group
     * When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSource();

    /**
     * Property sourceType: Security access control source address type of policy.
     * <p>
     * net: Source segment (CIDR)
     * group: source address book
     * location: the source area
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceType();

    /**
     * Property destPort: Security access control policy access traffic destination port.
     * <p>
     * Note When DestPortType to port, set the item.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPort() {
        return null;
    }

    /**
     * Property destPortGroup: Security access control policy access traffic destination port address book name.
     * <p>
     * Description DestPortType is group, set the item.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPortGroup() {
        return null;
    }

    /**
     * Property destPortType: Security access control policy access destination port traffic type.
     * <p>
     * port: Port
     * group: port address book
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPortType() {
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
     * @return a {@link Builder} of {@link ControlPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ControlPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ControlPolicyProps> {
        java.lang.Object aclAction;
        java.lang.Object applicationName;
        java.lang.Object description;
        java.lang.Object destination;
        java.lang.Object destinationType;
        java.lang.Object direction;
        java.lang.Object newOrder;
        java.lang.Object proto;
        java.lang.Object source;
        java.lang.Object sourceType;
        java.lang.Object destPort;
        java.lang.Object destPortGroup;
        java.lang.Object destPortType;
        java.lang.Object regionId;

        /**
         * Sets the value of {@link ControlPolicyProps#getAclAction}
         * @param aclAction Property aclAction: Traffic access control policy set by the cloud of a firewall. This parameter is required.
         *                  accept: Release
         *                  drop: rejected
         *                  log: Observation
         * @return {@code this}
         */
        public Builder aclAction(java.lang.String aclAction) {
            this.aclAction = aclAction;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getAclAction}
         * @param aclAction Property aclAction: Traffic access control policy set by the cloud of a firewall. This parameter is required.
         *                  accept: Release
         *                  drop: rejected
         *                  log: Observation
         * @return {@code this}
         */
        public Builder aclAction(com.aliyun.ros.cdk.core.IResolvable aclAction) {
            this.aclAction = aclAction;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getApplicationName}
         * @param applicationName Property applicationName: Application types supported by the security policy. This parameter is required.
         *                        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
         *                        NOTE ANY indicates that the policy is applied to all types of applications.
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getApplicationName}
         * @param applicationName Property applicationName: Application types supported by the security policy. This parameter is required.
         *                        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
         *                        NOTE ANY indicates that the policy is applied to all types of applications.
         * @return {@code this}
         */
        public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDescription}
         * @param description Property description: Security access control policy description information. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDescription}
         * @param description Property description: Security access control policy description information. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestination}
         * @param destination Property destination: Security Access Control destination address policy. This parameter is required.
         *                    When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
         *                    When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
         *                    When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
         *                    When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
         * @return {@code this}
         */
        public Builder destination(java.lang.String destination) {
            this.destination = destination;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestination}
         * @param destination Property destination: Security Access Control destination address policy. This parameter is required.
         *                    When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
         *                    When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
         *                    When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
         *                    When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
         * @return {@code this}
         */
        public Builder destination(com.aliyun.ros.cdk.core.IResolvable destination) {
            this.destination = destination;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestinationType}
         * @param destinationType Property destinationType: Security Access Control destination address type of policy. This parameter is required.
         *                        net: Destination network segment (CIDR)
         *                        group: destination address book
         *                        domain: The purpose domain
         *                        location: The purpose area
         * @return {@code this}
         */
        public Builder destinationType(java.lang.String destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestinationType}
         * @param destinationType Property destinationType: Security Access Control destination address type of policy. This parameter is required.
         *                        net: Destination network segment (CIDR)
         *                        group: destination address book
         *                        domain: The purpose domain
         *                        location: The purpose area
         * @return {@code this}
         */
        public Builder destinationType(com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDirection}
         * @param direction Property direction: Security access control traffic direction policies. This parameter is required.
         *                  in: internal and external traffic access control
         *                  out: within the flow of external access control
         * @return {@code this}
         */
        public Builder direction(java.lang.String direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDirection}
         * @param direction Property direction: Security access control traffic direction policies. This parameter is required.
         *                  in: internal and external traffic access control
         *                  out: within the flow of external access control
         * @return {@code this}
         */
        public Builder direction(com.aliyun.ros.cdk.core.IResolvable direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getNewOrder}
         * @param newOrder Property newOrder: Security access control priority policy in force. This parameter is required.
         *                 Priority number increments sequentially from 1, lower the priority number, the higher the priority.
         *                 Description -1 indicates the lowest priority.
         * @return {@code this}
         */
        public Builder newOrder(java.lang.Number newOrder) {
            this.newOrder = newOrder;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getNewOrder}
         * @param newOrder Property newOrder: Security access control priority policy in force. This parameter is required.
         *                 Priority number increments sequentially from 1, lower the priority number, the higher the priority.
         *                 Description -1 indicates the lowest priority.
         * @return {@code this}
         */
        public Builder newOrder(com.aliyun.ros.cdk.core.IResolvable newOrder) {
            this.newOrder = newOrder;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getProto}
         * @param proto Property proto: The type of security protocol for traffic access in the security access control policy. This parameter is required.
         *              Can be set to ANY when you are not sure of the specific protocol type.
         *              Allowed values: ANY, TCP, UDP, ICMP
         * @return {@code this}
         */
        public Builder proto(java.lang.String proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getProto}
         * @param proto Property proto: The type of security protocol for traffic access in the security access control policy. This parameter is required.
         *              Can be set to ANY when you are not sure of the specific protocol type.
         *              Allowed values: ANY, TCP, UDP, ICMP
         * @return {@code this}
         */
        public Builder proto(com.aliyun.ros.cdk.core.IResolvable proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getSource}
         * @param source Property source: Security access control source address policy. This parameter is required.
         *               When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
         *               When SourceType as a group, Source name for the source address book. For example: db_group
         *               When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getSource}
         * @param source Property source: Security access control source address policy. This parameter is required.
         *               When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
         *               When SourceType as a group, Source name for the source address book. For example: db_group
         *               When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getSourceType}
         * @param sourceType Property sourceType: Security access control source address type of policy. This parameter is required.
         *                   net: Source segment (CIDR)
         *                   group: source address book
         *                   location: the source area
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getSourceType}
         * @param sourceType Property sourceType: Security access control source address type of policy. This parameter is required.
         *                   net: Source segment (CIDR)
         *                   group: source address book
         *                   location: the source area
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestPort}
         * @param destPort Property destPort: Security access control policy access traffic destination port.
         *                 Note When DestPortType to port, set the item.
         * @return {@code this}
         */
        public Builder destPort(java.lang.String destPort) {
            this.destPort = destPort;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestPort}
         * @param destPort Property destPort: Security access control policy access traffic destination port.
         *                 Note When DestPortType to port, set the item.
         * @return {@code this}
         */
        public Builder destPort(com.aliyun.ros.cdk.core.IResolvable destPort) {
            this.destPort = destPort;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestPortGroup}
         * @param destPortGroup Property destPortGroup: Security access control policy access traffic destination port address book name.
         *                      Description DestPortType is group, set the item.
         * @return {@code this}
         */
        public Builder destPortGroup(java.lang.String destPortGroup) {
            this.destPortGroup = destPortGroup;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestPortGroup}
         * @param destPortGroup Property destPortGroup: Security access control policy access traffic destination port address book name.
         *                      Description DestPortType is group, set the item.
         * @return {@code this}
         */
        public Builder destPortGroup(com.aliyun.ros.cdk.core.IResolvable destPortGroup) {
            this.destPortGroup = destPortGroup;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestPortType}
         * @param destPortType Property destPortType: Security access control policy access destination port traffic type.
         *                     port: Port
         *                     group: port address book
         * @return {@code this}
         */
        public Builder destPortType(java.lang.String destPortType) {
            this.destPortType = destPortType;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestPortType}
         * @param destPortType Property destPortType: Security access control policy access destination port traffic type.
         *                     port: Port
         *                     group: port address book
         * @return {@code this}
         */
        public Builder destPortType(com.aliyun.ros.cdk.core.IResolvable destPortType) {
            this.destPortType = destPortType;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getRegionId}
         * @param regionId Property regionId: Region ID.
         *                 Default to cn-hangzhou.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getRegionId}
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
         * @return a new instance of {@link ControlPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ControlPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ControlPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ControlPolicyProps {
        private final java.lang.Object aclAction;
        private final java.lang.Object applicationName;
        private final java.lang.Object description;
        private final java.lang.Object destination;
        private final java.lang.Object destinationType;
        private final java.lang.Object direction;
        private final java.lang.Object newOrder;
        private final java.lang.Object proto;
        private final java.lang.Object source;
        private final java.lang.Object sourceType;
        private final java.lang.Object destPort;
        private final java.lang.Object destPortGroup;
        private final java.lang.Object destPortType;
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
            this.direction = software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.newOrder = software.amazon.jsii.Kernel.get(this, "newOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proto = software.amazon.jsii.Kernel.get(this, "proto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPort = software.amazon.jsii.Kernel.get(this, "destPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPortGroup = software.amazon.jsii.Kernel.get(this, "destPortGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPortType = software.amazon.jsii.Kernel.get(this, "destPortType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.direction = java.util.Objects.requireNonNull(builder.direction, "direction is required");
            this.newOrder = java.util.Objects.requireNonNull(builder.newOrder, "newOrder is required");
            this.proto = java.util.Objects.requireNonNull(builder.proto, "proto is required");
            this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
            this.sourceType = java.util.Objects.requireNonNull(builder.sourceType, "sourceType is required");
            this.destPort = builder.destPort;
            this.destPortGroup = builder.destPortGroup;
            this.destPortType = builder.destPortType;
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
        public final java.lang.Object getDirection() {
            return this.direction;
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
            data.set("direction", om.valueToTree(this.getDirection()));
            data.set("newOrder", om.valueToTree(this.getNewOrder()));
            data.set("proto", om.valueToTree(this.getProto()));
            data.set("source", om.valueToTree(this.getSource()));
            data.set("sourceType", om.valueToTree(this.getSourceType()));
            if (this.getDestPort() != null) {
                data.set("destPort", om.valueToTree(this.getDestPort()));
            }
            if (this.getDestPortGroup() != null) {
                data.set("destPortGroup", om.valueToTree(this.getDestPortGroup()));
            }
            if (this.getDestPortType() != null) {
                data.set("destPortType", om.valueToTree(this.getDestPortType()));
            }
            if (this.getRegionId() != null) {
                data.set("regionId", om.valueToTree(this.getRegionId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.ControlPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ControlPolicyProps.Jsii$Proxy that = (ControlPolicyProps.Jsii$Proxy) o;

            if (!aclAction.equals(that.aclAction)) return false;
            if (!applicationName.equals(that.applicationName)) return false;
            if (!description.equals(that.description)) return false;
            if (!destination.equals(that.destination)) return false;
            if (!destinationType.equals(that.destinationType)) return false;
            if (!direction.equals(that.direction)) return false;
            if (!newOrder.equals(that.newOrder)) return false;
            if (!proto.equals(that.proto)) return false;
            if (!source.equals(that.source)) return false;
            if (!sourceType.equals(that.sourceType)) return false;
            if (this.destPort != null ? !this.destPort.equals(that.destPort) : that.destPort != null) return false;
            if (this.destPortGroup != null ? !this.destPortGroup.equals(that.destPortGroup) : that.destPortGroup != null) return false;
            if (this.destPortType != null ? !this.destPortType.equals(that.destPortType) : that.destPortType != null) return false;
            return this.regionId != null ? this.regionId.equals(that.regionId) : that.regionId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aclAction.hashCode();
            result = 31 * result + (this.applicationName.hashCode());
            result = 31 * result + (this.description.hashCode());
            result = 31 * result + (this.destination.hashCode());
            result = 31 * result + (this.destinationType.hashCode());
            result = 31 * result + (this.direction.hashCode());
            result = 31 * result + (this.newOrder.hashCode());
            result = 31 * result + (this.proto.hashCode());
            result = 31 * result + (this.source.hashCode());
            result = 31 * result + (this.sourceType.hashCode());
            result = 31 * result + (this.destPort != null ? this.destPort.hashCode() : 0);
            result = 31 * result + (this.destPortGroup != null ? this.destPortGroup.hashCode() : 0);
            result = 31 * result + (this.destPortType != null ? this.destPortType.hashCode() : 0);
            result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
            return result;
        }
    }
}
