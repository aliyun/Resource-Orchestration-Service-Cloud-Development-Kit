package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a <code>ALIYUN::NAS::AccessRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.736Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosAccessRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessRuleProps.Jsii$Proxy.class)
public interface RosAccessRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6SourceCidrIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRwAccessType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceCidrIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserAccessType() {
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
        java.lang.Object accessGroupName;
        java.lang.Object fileSystemType;
        java.lang.Object ipv6SourceCidrIp;
        java.lang.Object priority;
        java.lang.Object rwAccessType;
        java.lang.Object sourceCidrIp;
        java.lang.Object userAccessType;

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
         * Sets the value of {@link RosAccessRuleProps#getAccessGroupName}
         * @param accessGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupName(com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getFileSystemType}
         * @param fileSystemType the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemType(java.lang.String fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getFileSystemType}
         * @param fileSystemType the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemType(com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getIpv6SourceCidrIp}
         * @param ipv6SourceCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6SourceCidrIp(java.lang.String ipv6SourceCidrIp) {
            this.ipv6SourceCidrIp = ipv6SourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getIpv6SourceCidrIp}
         * @param ipv6SourceCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder ipv6SourceCidrIp(com.aliyun.ros.cdk.core.IResolvable ipv6SourceCidrIp) {
            this.ipv6SourceCidrIp = ipv6SourceCidrIp;
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
         * Sets the value of {@link RosAccessRuleProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
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
         * Sets the value of {@link RosAccessRuleProps#getRwAccessType}
         * @param rwAccessType the value to be set.
         * @return {@code this}
         */
        public Builder rwAccessType(com.aliyun.ros.cdk.core.IResolvable rwAccessType) {
            this.rwAccessType = rwAccessType;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getSourceCidrIp}
         * @param sourceCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder sourceCidrIp(java.lang.String sourceCidrIp) {
            this.sourceCidrIp = sourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessRuleProps#getSourceCidrIp}
         * @param sourceCidrIp the value to be set.
         * @return {@code this}
         */
        public Builder sourceCidrIp(com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
            this.sourceCidrIp = sourceCidrIp;
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
         * Sets the value of {@link RosAccessRuleProps#getUserAccessType}
         * @param userAccessType the value to be set.
         * @return {@code this}
         */
        public Builder userAccessType(com.aliyun.ros.cdk.core.IResolvable userAccessType) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccessRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessRuleProps {
        private final java.lang.Object accessGroupName;
        private final java.lang.Object fileSystemType;
        private final java.lang.Object ipv6SourceCidrIp;
        private final java.lang.Object priority;
        private final java.lang.Object rwAccessType;
        private final java.lang.Object sourceCidrIp;
        private final java.lang.Object userAccessType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupName = software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileSystemType = software.amazon.jsii.Kernel.get(this, "fileSystemType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6SourceCidrIp = software.amazon.jsii.Kernel.get(this, "ipv6SourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rwAccessType = software.amazon.jsii.Kernel.get(this, "rwAccessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceCidrIp = software.amazon.jsii.Kernel.get(this, "sourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userAccessType = software.amazon.jsii.Kernel.get(this, "userAccessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupName = java.util.Objects.requireNonNull(builder.accessGroupName, "accessGroupName is required");
            this.fileSystemType = builder.fileSystemType;
            this.ipv6SourceCidrIp = builder.ipv6SourceCidrIp;
            this.priority = builder.priority;
            this.rwAccessType = builder.rwAccessType;
            this.sourceCidrIp = builder.sourceCidrIp;
            this.userAccessType = builder.userAccessType;
        }

        @Override
        public final java.lang.Object getAccessGroupName() {
            return this.accessGroupName;
        }

        @Override
        public final java.lang.Object getFileSystemType() {
            return this.fileSystemType;
        }

        @Override
        public final java.lang.Object getIpv6SourceCidrIp() {
            return this.ipv6SourceCidrIp;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getRwAccessType() {
            return this.rwAccessType;
        }

        @Override
        public final java.lang.Object getSourceCidrIp() {
            return this.sourceCidrIp;
        }

        @Override
        public final java.lang.Object getUserAccessType() {
            return this.userAccessType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessGroupName", om.valueToTree(this.getAccessGroupName()));
            if (this.getFileSystemType() != null) {
                data.set("fileSystemType", om.valueToTree(this.getFileSystemType()));
            }
            if (this.getIpv6SourceCidrIp() != null) {
                data.set("ipv6SourceCidrIp", om.valueToTree(this.getIpv6SourceCidrIp()));
            }
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }
            if (this.getRwAccessType() != null) {
                data.set("rwAccessType", om.valueToTree(this.getRwAccessType()));
            }
            if (this.getSourceCidrIp() != null) {
                data.set("sourceCidrIp", om.valueToTree(this.getSourceCidrIp()));
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
            if (this.fileSystemType != null ? !this.fileSystemType.equals(that.fileSystemType) : that.fileSystemType != null) return false;
            if (this.ipv6SourceCidrIp != null ? !this.ipv6SourceCidrIp.equals(that.ipv6SourceCidrIp) : that.ipv6SourceCidrIp != null) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            if (this.rwAccessType != null ? !this.rwAccessType.equals(that.rwAccessType) : that.rwAccessType != null) return false;
            if (this.sourceCidrIp != null ? !this.sourceCidrIp.equals(that.sourceCidrIp) : that.sourceCidrIp != null) return false;
            return this.userAccessType != null ? this.userAccessType.equals(that.userAccessType) : that.userAccessType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupName.hashCode();
            result = 31 * result + (this.fileSystemType != null ? this.fileSystemType.hashCode() : 0);
            result = 31 * result + (this.ipv6SourceCidrIp != null ? this.ipv6SourceCidrIp.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.rwAccessType != null ? this.rwAccessType.hashCode() : 0);
            result = 31 * result + (this.sourceCidrIp != null ? this.sourceCidrIp.hashCode() : 0);
            result = 31 * result + (this.userAccessType != null ? this.userAccessType.hashCode() : 0);
            return result;
        }
    }
}
