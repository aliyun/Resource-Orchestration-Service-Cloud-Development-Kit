package com.aliyun.ros.cdk.core;

/**
 * Options applied when copying directories.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:00.633Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.CopyOptions")
@software.amazon.jsii.Jsii.Proxy(CopyOptions.Jsii$Proxy.class)
public interface CopyOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * File paths matching the patterns will be excluded.
     * <p>
     * See <code>ignoreMode</code> to set the matching behavior.
     * Has no effect on Assets bundled using the <code>bundling</code> property.
     * <p>
     * Default: - nothing is excluded
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getExclude() {
        return null;
    }

    /**
     * A strategy for how to handle symlinks.
     * <p>
     * Default: SymlinkFollowMode.NEVER
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.SymlinkFollowMode getFollow() {
        return null;
    }

    /**
     * The ignore behavior to use for <code>exclude</code> patterns.
     * <p>
     * Default: IgnoreMode.GLOB
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IgnoreMode getIgnoreMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CopyOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CopyOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CopyOptions> {
        java.util.List<java.lang.String> exclude;
        com.aliyun.ros.cdk.core.SymlinkFollowMode follow;
        com.aliyun.ros.cdk.core.IgnoreMode ignoreMode;

        /**
         * Sets the value of {@link CopyOptions#getExclude}
         * @param exclude File paths matching the patterns will be excluded.
         *                See <code>ignoreMode</code> to set the matching behavior.
         *                Has no effect on Assets bundled using the <code>bundling</code> property.
         * @return {@code this}
         */
        public Builder exclude(java.util.List<java.lang.String> exclude) {
            this.exclude = exclude;
            return this;
        }

        /**
         * Sets the value of {@link CopyOptions#getFollow}
         * @param follow A strategy for how to handle symlinks.
         * @return {@code this}
         */
        public Builder follow(com.aliyun.ros.cdk.core.SymlinkFollowMode follow) {
            this.follow = follow;
            return this;
        }

        /**
         * Sets the value of {@link CopyOptions#getIgnoreMode}
         * @param ignoreMode The ignore behavior to use for <code>exclude</code> patterns.
         * @return {@code this}
         */
        public Builder ignoreMode(com.aliyun.ros.cdk.core.IgnoreMode ignoreMode) {
            this.ignoreMode = ignoreMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CopyOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CopyOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CopyOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CopyOptions {
        private final java.util.List<java.lang.String> exclude;
        private final com.aliyun.ros.cdk.core.SymlinkFollowMode follow;
        private final com.aliyun.ros.cdk.core.IgnoreMode ignoreMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.exclude = software.amazon.jsii.Kernel.get(this, "exclude", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.follow = software.amazon.jsii.Kernel.get(this, "follow", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.SymlinkFollowMode.class));
            this.ignoreMode = software.amazon.jsii.Kernel.get(this, "ignoreMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IgnoreMode.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.exclude = builder.exclude;
            this.follow = builder.follow;
            this.ignoreMode = builder.ignoreMode;
        }

        @Override
        public final java.util.List<java.lang.String> getExclude() {
            return this.exclude;
        }

        @Override
        public final com.aliyun.ros.cdk.core.SymlinkFollowMode getFollow() {
            return this.follow;
        }

        @Override
        public final com.aliyun.ros.cdk.core.IgnoreMode getIgnoreMode() {
            return this.ignoreMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getExclude() != null) {
                data.set("exclude", om.valueToTree(this.getExclude()));
            }
            if (this.getFollow() != null) {
                data.set("follow", om.valueToTree(this.getFollow()));
            }
            if (this.getIgnoreMode() != null) {
                data.set("ignoreMode", om.valueToTree(this.getIgnoreMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.CopyOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CopyOptions.Jsii$Proxy that = (CopyOptions.Jsii$Proxy) o;

            if (this.exclude != null ? !this.exclude.equals(that.exclude) : that.exclude != null) return false;
            if (this.follow != null ? !this.follow.equals(that.follow) : that.follow != null) return false;
            return this.ignoreMode != null ? this.ignoreMode.equals(that.ignoreMode) : that.ignoreMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.exclude != null ? this.exclude.hashCode() : 0;
            result = 31 * result + (this.follow != null ? this.follow.hashCode() : 0);
            result = 31 * result + (this.ignoreMode != null ? this.ignoreMode.hashCode() : 0);
            return result;
        }
    }
}
