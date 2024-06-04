package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a <code>RosControlPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.077Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosControlPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosControlPolicyProps.Jsii$Proxy.class)
public interface RosControlPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclAction();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestination();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirection();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNewOrder();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProto();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSource();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPortGroup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestPortType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosControlPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosControlPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosControlPolicyProps> {
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
         * Sets the value of {@link RosControlPolicyProps#getAclAction}
         * @param aclAction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclAction(java.lang.String aclAction) {
            this.aclAction = aclAction;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getAclAction}
         * @param aclAction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclAction(com.aliyun.ros.cdk.core.IResolvable aclAction) {
            this.aclAction = aclAction;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getApplicationName}
         * @param applicationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getApplicationName}
         * @param applicationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestination}
         * @param destination the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destination(java.lang.String destination) {
            this.destination = destination;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestination}
         * @param destination the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destination(com.aliyun.ros.cdk.core.IResolvable destination) {
            this.destination = destination;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestinationType}
         * @param destinationType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationType(java.lang.String destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestinationType}
         * @param destinationType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationType(com.aliyun.ros.cdk.core.IResolvable destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDirection}
         * @param direction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder direction(java.lang.String direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDirection}
         * @param direction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder direction(com.aliyun.ros.cdk.core.IResolvable direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getNewOrder}
         * @param newOrder the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder newOrder(java.lang.Number newOrder) {
            this.newOrder = newOrder;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getNewOrder}
         * @param newOrder the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder newOrder(com.aliyun.ros.cdk.core.IResolvable newOrder) {
            this.newOrder = newOrder;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getProto}
         * @param proto the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder proto(java.lang.String proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getProto}
         * @param proto the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder proto(com.aliyun.ros.cdk.core.IResolvable proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getSource}
         * @param source the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getSource}
         * @param source the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestPort}
         * @param destPort the value to be set.
         * @return {@code this}
         */
        public Builder destPort(java.lang.String destPort) {
            this.destPort = destPort;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestPort}
         * @param destPort the value to be set.
         * @return {@code this}
         */
        public Builder destPort(com.aliyun.ros.cdk.core.IResolvable destPort) {
            this.destPort = destPort;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestPortGroup}
         * @param destPortGroup the value to be set.
         * @return {@code this}
         */
        public Builder destPortGroup(java.lang.String destPortGroup) {
            this.destPortGroup = destPortGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestPortGroup}
         * @param destPortGroup the value to be set.
         * @return {@code this}
         */
        public Builder destPortGroup(com.aliyun.ros.cdk.core.IResolvable destPortGroup) {
            this.destPortGroup = destPortGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestPortType}
         * @param destPortType the value to be set.
         * @return {@code this}
         */
        public Builder destPortType(java.lang.String destPortType) {
            this.destPortType = destPortType;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getDestPortType}
         * @param destPortType the value to be set.
         * @return {@code this}
         */
        public Builder destPortType(com.aliyun.ros.cdk.core.IResolvable destPortType) {
            this.destPortType = destPortType;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RosControlPolicyProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosControlPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosControlPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosControlPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosControlPolicyProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosControlPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosControlPolicyProps.Jsii$Proxy that = (RosControlPolicyProps.Jsii$Proxy) o;

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
