package com.aliyun.ros.cdk.core;

/**
 * Represents a mapping.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:41.985Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosMapping")
public class RosMapping extends com.aliyun.ros.cdk.core.RosRefElement {

    protected RosMapping(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosMapping(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public RosMapping(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosMappingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    public RosMapping(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * @return A reference to a value in the map based on the two keys.
     * @param key1 This parameter is required.
     * @param key2 This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable findInMap(final @org.jetbrains.annotations.NotNull java.lang.String key1, final @org.jetbrains.annotations.NotNull java.lang.String key2) {
        return software.amazon.jsii.Kernel.call(this, "findInMap", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(key1, "key1 is required"), java.util.Objects.requireNonNull(key2, "key2 is required") });
    }

    /**
     * Sets a value in the map based on the two keys.
     * <p>
     * @param key1 This parameter is required.
     * @param key2 This parameter is required.
     * @param value This parameter is required.
     */
    public void setValue(final @org.jetbrains.annotations.NotNull java.lang.String key1, final @org.jetbrains.annotations.NotNull java.lang.String key2, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.call(this, "setValue", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(key1, "key1 is required"), java.util.Objects.requireNonNull(key2, "key2 is required"), value });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.RosMapping}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.RosMapping> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private com.aliyun.ros.cdk.core.RosMappingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
        }

        /**
         * Mapping of key to a set of corresponding set of named values.
         * <p>
         * The key identifies a map of name-value pairs and must be unique within the mapping.
         * <p>
         * For example, if you want to set values based on a region, you can create a mapping
         * that uses the region name as a key and contains the values you want to specify for
         * each specific region.
         * <p>
         * Default: - No mapping.
         * <p>
         * @return {@code this}
         * @param mapping Mapping of key to a set of corresponding set of named values. This parameter is required.
         */
        public Builder mapping(final java.util.Map<java.lang.String, ? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> mapping) {
            this.props().mapping(mapping);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.core.RosMapping}.
         */
        @Override
        public com.aliyun.ros.cdk.core.RosMapping build() {
            return new com.aliyun.ros.cdk.core.RosMapping(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.RosMappingProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.core.RosMappingProps.Builder();
            }
            return this.props;
        }
    }
}
