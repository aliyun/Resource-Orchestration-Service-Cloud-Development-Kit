package com.aliyun.ros.cdk.cloudfw;

/**
 * Properties for defining a `ALIYUN::CLOUDFW::ControlPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.229Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.ControlPolicyProps")
@software.amazon.jsii.Jsii.Proxy(ControlPolicyProps.Jsii$Proxy.class)
public interface ControlPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAclAction();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getApplicationName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDestination();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDestinationType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDirection();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getNewOrder();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProto();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSource();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestPortGroup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestPortType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegionId() {
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
        private java.lang.String aclAction;
        private java.lang.String applicationName;
        private java.lang.String description;
        private java.lang.String destination;
        private java.lang.String destinationType;
        private java.lang.String direction;
        private java.lang.Number newOrder;
        private java.lang.String proto;
        private java.lang.String source;
        private java.lang.String sourceType;
        private java.lang.String destPort;
        private java.lang.String destPortGroup;
        private java.lang.String destPortType;
        private java.lang.String regionId;

        /**
         * Sets the value of {@link ControlPolicyProps#getAclAction}
         * @param aclAction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclAction(java.lang.String aclAction) {
            this.aclAction = aclAction;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getApplicationName}
         * @param applicationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDescription}
         * @param description the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestination}
         * @param destination the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destination(java.lang.String destination) {
            this.destination = destination;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestinationType}
         * @param destinationType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationType(java.lang.String destinationType) {
            this.destinationType = destinationType;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDirection}
         * @param direction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder direction(java.lang.String direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getNewOrder}
         * @param newOrder the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder newOrder(java.lang.Number newOrder) {
            this.newOrder = newOrder;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getProto}
         * @param proto the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder proto(java.lang.String proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getSource}
         * @param source the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestPort}
         * @param destPort the value to be set.
         * @return {@code this}
         */
        public Builder destPort(java.lang.String destPort) {
            this.destPort = destPort;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestPortGroup}
         * @param destPortGroup the value to be set.
         * @return {@code this}
         */
        public Builder destPortGroup(java.lang.String destPortGroup) {
            this.destPortGroup = destPortGroup;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getDestPortType}
         * @param destPortType the value to be set.
         * @return {@code this}
         */
        public Builder destPortType(java.lang.String destPortType) {
            this.destPortType = destPortType;
            return this;
        }

        /**
         * Sets the value of {@link ControlPolicyProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
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
            return new Jsii$Proxy(aclAction, applicationName, description, destination, destinationType, direction, newOrder, proto, source, sourceType, destPort, destPortGroup, destPortType, regionId);
        }
    }

    /**
     * An implementation for {@link ControlPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ControlPolicyProps {
        private final java.lang.String aclAction;
        private final java.lang.String applicationName;
        private final java.lang.String description;
        private final java.lang.String destination;
        private final java.lang.String destinationType;
        private final java.lang.String direction;
        private final java.lang.Number newOrder;
        private final java.lang.String proto;
        private final java.lang.String source;
        private final java.lang.String sourceType;
        private final java.lang.String destPort;
        private final java.lang.String destPortGroup;
        private final java.lang.String destPortType;
        private final java.lang.String regionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclAction = software.amazon.jsii.Kernel.get(this, "aclAction", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destination = software.amazon.jsii.Kernel.get(this, "destination", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationType = software.amazon.jsii.Kernel.get(this, "destinationType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.direction = software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.newOrder = software.amazon.jsii.Kernel.get(this, "newOrder", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.proto = software.amazon.jsii.Kernel.get(this, "proto", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destPort = software.amazon.jsii.Kernel.get(this, "destPort", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destPortGroup = software.amazon.jsii.Kernel.get(this, "destPortGroup", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destPortType = software.amazon.jsii.Kernel.get(this, "destPortType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String aclAction, final java.lang.String applicationName, final java.lang.String description, final java.lang.String destination, final java.lang.String destinationType, final java.lang.String direction, final java.lang.Number newOrder, final java.lang.String proto, final java.lang.String source, final java.lang.String sourceType, final java.lang.String destPort, final java.lang.String destPortGroup, final java.lang.String destPortType, final java.lang.String regionId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclAction = java.util.Objects.requireNonNull(aclAction, "aclAction is required");
            this.applicationName = java.util.Objects.requireNonNull(applicationName, "applicationName is required");
            this.description = java.util.Objects.requireNonNull(description, "description is required");
            this.destination = java.util.Objects.requireNonNull(destination, "destination is required");
            this.destinationType = java.util.Objects.requireNonNull(destinationType, "destinationType is required");
            this.direction = java.util.Objects.requireNonNull(direction, "direction is required");
            this.newOrder = java.util.Objects.requireNonNull(newOrder, "newOrder is required");
            this.proto = java.util.Objects.requireNonNull(proto, "proto is required");
            this.source = java.util.Objects.requireNonNull(source, "source is required");
            this.sourceType = java.util.Objects.requireNonNull(sourceType, "sourceType is required");
            this.destPort = destPort;
            this.destPortGroup = destPortGroup;
            this.destPortType = destPortType;
            this.regionId = regionId;
        }

        @Override
        public final java.lang.String getAclAction() {
            return this.aclAction;
        }

        @Override
        public final java.lang.String getApplicationName() {
            return this.applicationName;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getDestination() {
            return this.destination;
        }

        @Override
        public final java.lang.String getDestinationType() {
            return this.destinationType;
        }

        @Override
        public final java.lang.String getDirection() {
            return this.direction;
        }

        @Override
        public final java.lang.Number getNewOrder() {
            return this.newOrder;
        }

        @Override
        public final java.lang.String getProto() {
            return this.proto;
        }

        @Override
        public final java.lang.String getSource() {
            return this.source;
        }

        @Override
        public final java.lang.String getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.String getDestPort() {
            return this.destPort;
        }

        @Override
        public final java.lang.String getDestPortGroup() {
            return this.destPortGroup;
        }

        @Override
        public final java.lang.String getDestPortType() {
            return this.destPortType;
        }

        @Override
        public final java.lang.String getRegionId() {
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
