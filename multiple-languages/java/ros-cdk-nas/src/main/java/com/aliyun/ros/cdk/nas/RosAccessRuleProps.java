package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a `ALIYUN::NAS::AccessRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.115Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosAccessRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessRuleProps.Jsii$Proxy.class)
public interface RosAccessRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccessGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSourceCidrIp();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPriority() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRwAccessType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getUserAccessType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAccessRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccessRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccessRuleProps> {
        private java.lang.String accessGroupName;
        private java.lang.String sourceCidrIp;
        private java.lang.Number priority;
        private java.lang.String rwAccessType;
        private java.lang.String userAccessType;

        /**
         * Sets the value of {@link RosAccessRuleProps#getAccessGroupName}
         * @param accessGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupName(java.lang.String accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getSourceCidrIp}
         * @param sourceCidrIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceCidrIp(java.lang.String sourceCidrIp) {
            this.sourceCidrIp = sourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getRwAccessType}
         * @param rwAccessType the value to be set.
         * @return {@code this}
         */
        public Builder rwAccessType(java.lang.String rwAccessType) {
            this.rwAccessType = rwAccessType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getUserAccessType}
         * @param userAccessType the value to be set.
         * @return {@code this}
         */
        public Builder userAccessType(java.lang.String userAccessType) {
            this.userAccessType = userAccessType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccessRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccessRuleProps build() {
            return new Jsii$Proxy(accessGroupName, sourceCidrIp, priority, rwAccessType, userAccessType);
        }
    }

    /**
     * An implementation for {@link RosAccessRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessRuleProps {
        private final java.lang.String accessGroupName;
        private final java.lang.String sourceCidrIp;
        private final java.lang.Number priority;
        private final java.lang.String rwAccessType;
        private final java.lang.String userAccessType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupName = software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceCidrIp = software.amazon.jsii.Kernel.get(this, "sourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.rwAccessType = software.amazon.jsii.Kernel.get(this, "rwAccessType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.userAccessType = software.amazon.jsii.Kernel.get(this, "userAccessType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String accessGroupName, final java.lang.String sourceCidrIp, final java.lang.Number priority, final java.lang.String rwAccessType, final java.lang.String userAccessType) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupName = java.util.Objects.requireNonNull(accessGroupName, "accessGroupName is required");
            this.sourceCidrIp = java.util.Objects.requireNonNull(sourceCidrIp, "sourceCidrIp is required");
            this.priority = priority;
            this.rwAccessType = rwAccessType;
            this.userAccessType = userAccessType;
        }

        @Override
        public final java.lang.String getAccessGroupName() {
            return this.accessGroupName;
        }

        @Override
        public final java.lang.String getSourceCidrIp() {
            return this.sourceCidrIp;
        }

        @Override
        public final java.lang.Number getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.String getRwAccessType() {
            return this.rwAccessType;
        }

        @Override
        public final java.lang.String getUserAccessType() {
            return this.userAccessType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessGroupName", om.valueToTree(this.getAccessGroupName()));
            data.set("sourceCidrIp", om.valueToTree(this.getSourceCidrIp()));
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }
            if (this.getRwAccessType() != null) {
                data.set("rwAccessType", om.valueToTree(this.getRwAccessType()));
            }
            if (this.getUserAccessType() != null) {
                data.set("userAccessType", om.valueToTree(this.getUserAccessType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.RosAccessRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccessRuleProps.Jsii$Proxy that = (RosAccessRuleProps.Jsii$Proxy) o;

            if (!accessGroupName.equals(that.accessGroupName)) return false;
            if (!sourceCidrIp.equals(that.sourceCidrIp)) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            if (this.rwAccessType != null ? !this.rwAccessType.equals(that.rwAccessType) : that.rwAccessType != null) return false;
            return this.userAccessType != null ? this.userAccessType.equals(that.userAccessType) : that.userAccessType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupName.hashCode();
            result = 31 * result + (this.sourceCidrIp.hashCode());
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.rwAccessType != null ? this.rwAccessType.hashCode() : 0);
            result = 31 * result + (this.userAccessType != null ? this.userAccessType.hashCode() : 0);
            return result;
        }
    }
}
