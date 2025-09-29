package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a <code>RosUserDefineRegion</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.006Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosUserDefineRegionProps")
@software.amazon.jsii.Jsii.Proxy(RosUserDefineRegionProps.Jsii$Proxy.class)
public interface RosUserDefineRegionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegionTag();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDebugEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosUserDefineRegionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUserDefineRegionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUserDefineRegionProps> {
        java.lang.Object regionName;
        java.lang.Object regionTag;
        java.lang.Object debugEnable;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosUserDefineRegionProps#getRegionName}
         * @param regionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regionName(java.lang.String regionName) {
            this.regionName = regionName;
            return this;
        }

        /**
         * Sets the value of {@link RosUserDefineRegionProps#getRegionName}
         * @param regionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regionName(com.aliyun.ros.cdk.core.IResolvable regionName) {
            this.regionName = regionName;
            return this;
        }

        /**
         * Sets the value of {@link RosUserDefineRegionProps#getRegionTag}
         * @param regionTag the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regionTag(java.lang.String regionTag) {
            this.regionTag = regionTag;
            return this;
        }

        /**
         * Sets the value of {@link RosUserDefineRegionProps#getRegionTag}
         * @param regionTag the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regionTag(com.aliyun.ros.cdk.core.IResolvable regionTag) {
            this.regionTag = regionTag;
            return this;
        }

        /**
         * Sets the value of {@link RosUserDefineRegionProps#getDebugEnable}
         * @param debugEnable the value to be set.
         * @return {@code this}
         */
        public Builder debugEnable(java.lang.Boolean debugEnable) {
            this.debugEnable = debugEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosUserDefineRegionProps#getDebugEnable}
         * @param debugEnable the value to be set.
         * @return {@code this}
         */
        public Builder debugEnable(com.aliyun.ros.cdk.core.IResolvable debugEnable) {
            this.debugEnable = debugEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosUserDefineRegionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosUserDefineRegionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUserDefineRegionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUserDefineRegionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosUserDefineRegionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUserDefineRegionProps {
        private final java.lang.Object regionName;
        private final java.lang.Object regionTag;
        private final java.lang.Object debugEnable;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.regionName = software.amazon.jsii.Kernel.get(this, "regionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionTag = software.amazon.jsii.Kernel.get(this, "regionTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.debugEnable = software.amazon.jsii.Kernel.get(this, "debugEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.regionName = java.util.Objects.requireNonNull(builder.regionName, "regionName is required");
            this.regionTag = java.util.Objects.requireNonNull(builder.regionTag, "regionTag is required");
            this.debugEnable = builder.debugEnable;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getRegionName() {
            return this.regionName;
        }

        @Override
        public final java.lang.Object getRegionTag() {
            return this.regionTag;
        }

        @Override
        public final java.lang.Object getDebugEnable() {
            return this.debugEnable;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("regionName", om.valueToTree(this.getRegionName()));
            data.set("regionTag", om.valueToTree(this.getRegionTag()));
            if (this.getDebugEnable() != null) {
                data.set("debugEnable", om.valueToTree(this.getDebugEnable()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosUserDefineRegionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUserDefineRegionProps.Jsii$Proxy that = (RosUserDefineRegionProps.Jsii$Proxy) o;

            if (!regionName.equals(that.regionName)) return false;
            if (!regionTag.equals(that.regionTag)) return false;
            if (this.debugEnable != null ? !this.debugEnable.equals(that.debugEnable) : that.debugEnable != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.regionName.hashCode();
            result = 31 * result + (this.regionTag.hashCode());
            result = 31 * result + (this.debugEnable != null ? this.debugEnable.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
