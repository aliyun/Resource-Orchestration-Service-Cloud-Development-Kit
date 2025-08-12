package com.aliyun.ros.cdk.redis;

/**
 * Properties for defining a <code>UpgradeVersion</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-upgradeversion
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.073Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.UpgradeVersionProps")
@software.amazon.jsii.Jsii.Proxy(UpgradeVersionProps.Jsii$Proxy.class)
public interface UpgradeVersionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The id of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property autoUpgradeOpen: Whether to enable automatic upgrade.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoUpgradeOpen() {
        return null;
    }

    /**
     * Property effectiveTime: The time when the upgrade is effective.
     * <p>
     * Value: Immediately|MaintainTime, default: Immediately.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEffectiveTime() {
        return null;
    }

    /**
     * Property majorVersion: Upgrade the major version of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMajorVersion() {
        return null;
    }

    /**
     * Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinorVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UpgradeVersionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UpgradeVersionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UpgradeVersionProps> {
        java.lang.Object instanceId;
        java.lang.Object autoUpgradeOpen;
        java.lang.Object effectiveTime;
        java.lang.Object majorVersion;
        java.lang.Object minorVersion;

        /**
         * Sets the value of {@link UpgradeVersionProps#getInstanceId}
         * @param instanceId Property instanceId: The id of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link UpgradeVersionProps#getInstanceId}
         * @param instanceId Property instanceId: The id of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link UpgradeVersionProps#getAutoUpgradeOpen}
         * @param autoUpgradeOpen Property autoUpgradeOpen: Whether to enable automatic upgrade.
         * @return {@code this}
         */
        public Builder autoUpgradeOpen(java.lang.Boolean autoUpgradeOpen) {
            this.autoUpgradeOpen = autoUpgradeOpen;
            return this;
        }

        /**
         * Sets the value of {@link UpgradeVersionProps#getAutoUpgradeOpen}
         * @param autoUpgradeOpen Property autoUpgradeOpen: Whether to enable automatic upgrade.
         * @return {@code this}
         */
        public Builder autoUpgradeOpen(com.aliyun.ros.cdk.core.IResolvable autoUpgradeOpen) {
            this.autoUpgradeOpen = autoUpgradeOpen;
            return this;
        }

        /**
         * Sets the value of {@link UpgradeVersionProps#getEffectiveTime}
         * @param effectiveTime Property effectiveTime: The time when the upgrade is effective.
         *                      Value: Immediately|MaintainTime, default: Immediately.
         * @return {@code this}
         */
        public Builder effectiveTime(java.lang.String effectiveTime) {
            this.effectiveTime = effectiveTime;
            return this;
        }

        /**
         * Sets the value of {@link UpgradeVersionProps#getEffectiveTime}
         * @param effectiveTime Property effectiveTime: The time when the upgrade is effective.
         *                      Value: Immediately|MaintainTime, default: Immediately.
         * @return {@code this}
         */
        public Builder effectiveTime(com.aliyun.ros.cdk.core.IResolvable effectiveTime) {
            this.effectiveTime = effectiveTime;
            return this;
        }

        /**
         * Sets the value of {@link UpgradeVersionProps#getMajorVersion}
         * @param majorVersion Property majorVersion: Upgrade the major version of the instance.
         * @return {@code this}
         */
        public Builder majorVersion(java.lang.String majorVersion) {
            this.majorVersion = majorVersion;
            return this;
        }

        /**
         * Sets the value of {@link UpgradeVersionProps#getMajorVersion}
         * @param majorVersion Property majorVersion: Upgrade the major version of the instance.
         * @return {@code this}
         */
        public Builder majorVersion(com.aliyun.ros.cdk.core.IResolvable majorVersion) {
            this.majorVersion = majorVersion;
            return this;
        }

        /**
         * Sets the value of {@link UpgradeVersionProps#getMinorVersion}
         * @param minorVersion Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.
         * @return {@code this}
         */
        public Builder minorVersion(java.lang.String minorVersion) {
            this.minorVersion = minorVersion;
            return this;
        }

        /**
         * Sets the value of {@link UpgradeVersionProps#getMinorVersion}
         * @param minorVersion Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.
         * @return {@code this}
         */
        public Builder minorVersion(com.aliyun.ros.cdk.core.IResolvable minorVersion) {
            this.minorVersion = minorVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UpgradeVersionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UpgradeVersionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UpgradeVersionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UpgradeVersionProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object autoUpgradeOpen;
        private final java.lang.Object effectiveTime;
        private final java.lang.Object majorVersion;
        private final java.lang.Object minorVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoUpgradeOpen = software.amazon.jsii.Kernel.get(this, "autoUpgradeOpen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectiveTime = software.amazon.jsii.Kernel.get(this, "effectiveTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.majorVersion = software.amazon.jsii.Kernel.get(this, "majorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minorVersion = software.amazon.jsii.Kernel.get(this, "minorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.autoUpgradeOpen = builder.autoUpgradeOpen;
            this.effectiveTime = builder.effectiveTime;
            this.majorVersion = builder.majorVersion;
            this.minorVersion = builder.minorVersion;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getAutoUpgradeOpen() {
            return this.autoUpgradeOpen;
        }

        @Override
        public final java.lang.Object getEffectiveTime() {
            return this.effectiveTime;
        }

        @Override
        public final java.lang.Object getMajorVersion() {
            return this.majorVersion;
        }

        @Override
        public final java.lang.Object getMinorVersion() {
            return this.minorVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getAutoUpgradeOpen() != null) {
                data.set("autoUpgradeOpen", om.valueToTree(this.getAutoUpgradeOpen()));
            }
            if (this.getEffectiveTime() != null) {
                data.set("effectiveTime", om.valueToTree(this.getEffectiveTime()));
            }
            if (this.getMajorVersion() != null) {
                data.set("majorVersion", om.valueToTree(this.getMajorVersion()));
            }
            if (this.getMinorVersion() != null) {
                data.set("minorVersion", om.valueToTree(this.getMinorVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.UpgradeVersionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UpgradeVersionProps.Jsii$Proxy that = (UpgradeVersionProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (this.autoUpgradeOpen != null ? !this.autoUpgradeOpen.equals(that.autoUpgradeOpen) : that.autoUpgradeOpen != null) return false;
            if (this.effectiveTime != null ? !this.effectiveTime.equals(that.effectiveTime) : that.effectiveTime != null) return false;
            if (this.majorVersion != null ? !this.majorVersion.equals(that.majorVersion) : that.majorVersion != null) return false;
            return this.minorVersion != null ? this.minorVersion.equals(that.minorVersion) : that.minorVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.autoUpgradeOpen != null ? this.autoUpgradeOpen.hashCode() : 0);
            result = 31 * result + (this.effectiveTime != null ? this.effectiveTime.hashCode() : 0);
            result = 31 * result + (this.majorVersion != null ? this.majorVersion.hashCode() : 0);
            result = 31 * result + (this.minorVersion != null ? this.minorVersion.hashCode() : 0);
            return result;
        }
    }
}
