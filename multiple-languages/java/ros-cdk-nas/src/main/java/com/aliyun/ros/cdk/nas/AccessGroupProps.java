package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a `ALIYUN::NAS::AccessGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.109Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.AccessGroupProps")
@software.amazon.jsii.Jsii.Proxy(AccessGroupProps.Jsii$Proxy.class)
public interface AccessGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccessGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccessGroupType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccessGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessGroupProps> {
        private java.lang.String accessGroupName;
        private java.lang.String accessGroupType;
        private java.lang.String description;

        /**
         * Sets the value of {@link AccessGroupProps#getAccessGroupName}
         * @param accessGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupName(java.lang.String accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link AccessGroupProps#getAccessGroupType}
         * @param accessGroupType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupType(java.lang.String accessGroupType) {
            this.accessGroupType = accessGroupType;
            return this;
        }

        /**
         * Sets the value of {@link AccessGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessGroupProps build() {
            return new Jsii$Proxy(accessGroupName, accessGroupType, description);
        }
    }

    /**
     * An implementation for {@link AccessGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessGroupProps {
        private final java.lang.String accessGroupName;
        private final java.lang.String accessGroupType;
        private final java.lang.String description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupName = software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accessGroupType = software.amazon.jsii.Kernel.get(this, "accessGroupType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String accessGroupName, final java.lang.String accessGroupType, final java.lang.String description) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupName = java.util.Objects.requireNonNull(accessGroupName, "accessGroupName is required");
            this.accessGroupType = java.util.Objects.requireNonNull(accessGroupType, "accessGroupType is required");
            this.description = description;
        }

        @Override
        public final java.lang.String getAccessGroupName() {
            return this.accessGroupName;
        }

        @Override
        public final java.lang.String getAccessGroupType() {
            return this.accessGroupType;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessGroupName", om.valueToTree(this.getAccessGroupName()));
            data.set("accessGroupType", om.valueToTree(this.getAccessGroupType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.AccessGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessGroupProps.Jsii$Proxy that = (AccessGroupProps.Jsii$Proxy) o;

            if (!accessGroupName.equals(that.accessGroupName)) return false;
            if (!accessGroupType.equals(that.accessGroupType)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupName.hashCode();
            result = 31 * result + (this.accessGroupType.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
