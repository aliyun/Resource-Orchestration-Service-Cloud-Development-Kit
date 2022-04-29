package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a `ALIYUN::ResourceManager::Handshake`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:30.212Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.HandshakeProps")
@software.amazon.jsii.Jsii.Proxy(HandshakeProps.Jsii$Proxy.class)
public interface HandshakeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property targetEntity: Invited account ID or login email.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetEntity();

    /**
     * Property targetType: Type of account being invited.
     * <p>
     * Valid values: Account, Email
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetType();

    /**
     * Property note: Remarks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNote() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HandshakeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HandshakeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HandshakeProps> {
        java.lang.Object targetEntity;
        java.lang.Object targetType;
        java.lang.Object note;

        /**
         * Sets the value of {@link HandshakeProps#getTargetEntity}
         * @param targetEntity Property targetEntity: Invited account ID or login email. This parameter is required.
         * @return {@code this}
         */
        public Builder targetEntity(java.lang.String targetEntity) {
            this.targetEntity = targetEntity;
            return this;
        }

        /**
         * Sets the value of {@link HandshakeProps#getTargetEntity}
         * @param targetEntity Property targetEntity: Invited account ID or login email. This parameter is required.
         * @return {@code this}
         */
        public Builder targetEntity(com.aliyun.ros.cdk.core.IResolvable targetEntity) {
            this.targetEntity = targetEntity;
            return this;
        }

        /**
         * Sets the value of {@link HandshakeProps#getTargetType}
         * @param targetType Property targetType: Type of account being invited. This parameter is required.
         *                   Valid values: Account, Email
         * @return {@code this}
         */
        public Builder targetType(java.lang.String targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link HandshakeProps#getTargetType}
         * @param targetType Property targetType: Type of account being invited. This parameter is required.
         *                   Valid values: Account, Email
         * @return {@code this}
         */
        public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link HandshakeProps#getNote}
         * @param note Property note: Remarks.
         * @return {@code this}
         */
        public Builder note(java.lang.String note) {
            this.note = note;
            return this;
        }

        /**
         * Sets the value of {@link HandshakeProps#getNote}
         * @param note Property note: Remarks.
         * @return {@code this}
         */
        public Builder note(com.aliyun.ros.cdk.core.IResolvable note) {
            this.note = note;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HandshakeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HandshakeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HandshakeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HandshakeProps {
        private final java.lang.Object targetEntity;
        private final java.lang.Object targetType;
        private final java.lang.Object note;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.targetEntity = software.amazon.jsii.Kernel.get(this, "targetEntity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetType = software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.note = software.amazon.jsii.Kernel.get(this, "note", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.targetEntity = java.util.Objects.requireNonNull(builder.targetEntity, "targetEntity is required");
            this.targetType = java.util.Objects.requireNonNull(builder.targetType, "targetType is required");
            this.note = builder.note;
        }

        @Override
        public final java.lang.Object getTargetEntity() {
            return this.targetEntity;
        }

        @Override
        public final java.lang.Object getTargetType() {
            return this.targetType;
        }

        @Override
        public final java.lang.Object getNote() {
            return this.note;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("targetEntity", om.valueToTree(this.getTargetEntity()));
            data.set("targetType", om.valueToTree(this.getTargetType()));
            if (this.getNote() != null) {
                data.set("note", om.valueToTree(this.getNote()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.HandshakeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HandshakeProps.Jsii$Proxy that = (HandshakeProps.Jsii$Proxy) o;

            if (!targetEntity.equals(that.targetEntity)) return false;
            if (!targetType.equals(that.targetType)) return false;
            return this.note != null ? this.note.equals(that.note) : that.note == null;
        }

        @Override
        public final int hashCode() {
            int result = this.targetEntity.hashCode();
            result = 31 * result + (this.targetType.hashCode());
            result = 31 * result + (this.note != null ? this.note.hashCode() : 0);
            return result;
        }
    }
}
